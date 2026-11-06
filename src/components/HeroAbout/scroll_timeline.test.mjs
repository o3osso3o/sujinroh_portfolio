import assert from 'node:assert/strict'
import test from 'node:test'
import { create_intro_snap, create_scroll_timeline, get_scroll_state } from './scroll_timeline.ts'

test('intro snap aligns below the full-size hero only when all text fits', () => {
  const { snap_top, fits_viewport, hold_distance, wrapper_height } = create_intro_snap(900, 380, 180)
  assert.equal(snap_top, 479)
  assert.equal(fits_viewport, true)
  assert.equal(hold_distance, 108)
  assert.equal(wrapper_height, 288)
  // The stable wrapper is the snap target; its child holds then scrolls away.
  const wrapper_top = 1000
  const snap_scroll = wrapper_top - snap_top
  const sticky_top = (scroll) => Math.min(Math.max(wrapper_top - scroll, snap_top), wrapper_top + hold_distance - scroll)
  for (const offset of [0, 54, 108]) assert.equal(sticky_top(snap_scroll + offset), snap_top)
  assert.equal(sticky_top(snap_scroll + 109), snap_top - 1)
  assert.equal(create_intro_snap(600, 380, 200).fits_viewport, false)
  assert.equal(create_intro_snap(600, 380, 200).hold_distance, 0)
})

for (const [label, viewport_height, visual_height] of [
  ['desktop', 1080, 489], ['laptop', 800, 382],
  ['tablet', 1024, 382], ['mobile', 844, 177],
]) {
  test(`${label}: natural profile entry, pinned shrink, reverse scroll and release`, () => {
    const scene_height = viewport_height - 60
    const intro_bottom = scene_height + 300
    const profile_top = intro_bottom + viewport_height * 0.5
    const timeline = create_scroll_timeline(viewport_height, scene_height, visual_height, profile_top)
    const { move_end, shrink_start, shrink_end, release_start } = timeline
    assert.ok(move_end <= shrink_start && shrink_start < shrink_end && shrink_end <= release_start)
    assert.equal(get_scroll_state(timeline, shrink_start - 1).hero_scale, 1)
    assert.ok(get_scroll_state(timeline, shrink_start + 1).hero_scale < 1)
    // Preserve 40px throughout the shrink and release exactly at half size.
    assert.equal(release_start, shrink_end)
    for (const progress of [0, 0.25, 0.5, 0.75, 1]) {
      const position = shrink_start + (shrink_end - shrink_start) * progress
      assert.ok(Math.abs(profile_top - position - get_scroll_state(timeline, position).hero_bottom - 40) < 0.001)
    }
    assert.equal(get_scroll_state(timeline, shrink_start).hero_scale, 1)
    assert.ok(Math.abs(get_scroll_state(timeline, (shrink_start + shrink_end) / 2).hero_scale - 0.75) < 1e-12)
    assert.equal(get_scroll_state(timeline, shrink_end).hero_scale, 0.5)
    assert.equal(get_scroll_state(timeline, release_start + 1000).hero_scale, 0.5)
    // Reduced spacing brings the profile in before the hero starts shrinking.
    assert.ok(Math.abs(profile_top - shrink_start - (viewport_height * 0.05 + visual_height + 40)) < 0.001)
    assert.ok(profile_top - (shrink_start + shrink_end) / 2 < viewport_height)
    assert.ok(Math.abs(get_scroll_state(timeline, shrink_end).hero_bottom - (viewport_height * 0.05 + visual_height * 0.5)) < 0.001)
    assert.ok(Math.abs(timeline.track_height - scene_height - release_start) < 0.001)
    // CSS sticky releases at the track boundary; both elements then scroll together.
    for (const extra_scroll of [0, 1, 100, 500]) {
      const position = release_start + extra_scroll
      const hero_bottom = get_scroll_state(timeline, position).hero_bottom - extra_scroll
      assert.ok(Math.abs(profile_top - position - hero_bottom - 40) < 0.001)
    }
    const positions = [0, move_end, shrink_start, shrink_end, release_start]
    const forward = positions.map((position) => get_scroll_state(timeline, position))
    assert.deepEqual(positions.toReversed().map((position) => get_scroll_state(timeline, position)).toReversed(), forward)
    for (const boundary of positions.slice(1)) {
      const before = get_scroll_state(timeline, boundary - 0.001)
      const after = get_scroll_state(timeline, boundary + 0.001)
      assert.ok(Math.abs(before.hero_scale - after.hero_scale) < 0.001)
      assert.ok(Math.abs(before.hero_y - after.hero_y) < 0.01)
    }
  })
}
