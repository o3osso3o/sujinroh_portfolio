export function create_intro_snap(viewport_height: number, visual_height: number, intro_height: number) {
  const snap_top = viewport_height * 0.05 + visual_height + Math.min(64, viewport_height * 0.06)
  const fits_viewport = snap_top + intro_height <= viewport_height - 24
  const hold_distance = fits_viewport ? viewport_height * 0.12 : 0
  return { snap_top, fits_viewport, hold_distance, wrapper_height: intro_height + hold_distance }
}

export function create_scroll_timeline(
  viewport_height: number, scene_height: number, visual_height: number,
  profile_top: number,
) {
  const initial_top = (scene_height - visual_height) / 2
  const pinned_top = viewport_height * 0.05
  const move_end = Math.max(0, initial_top - pinned_top)
  // Keep a 20px gap while the rising profile pushes the hero to half size.
  const shrink_start = Math.max(move_end, profile_top - pinned_top - visual_height - 20)
  const shrink_end = shrink_start + visual_height * 0.5
  const release_start = shrink_end
  return {
    initial_top, visual_height, move_end, shrink_start, shrink_end, release_start,
    track_height: scene_height + release_start,
  }
}

export function get_scroll_state(timeline: ReturnType<typeof create_scroll_timeline>, distance: number) {
  const scroll_distance = Math.max(0, distance)
  const { initial_top, visual_height, move_end, shrink_start, shrink_end, release_start } = timeline
  const shrink_progress = Math.min(1, Math.max(0,
    (scroll_distance - shrink_start) / (shrink_end - shrink_start),
  ))
  const hero_y = -Math.min(scroll_distance, move_end)
  const hero_scale = 1 - shrink_progress * 0.5
  return {
    hero_y,
    hero_scale,
    hero_bottom: initial_top + hero_y + visual_height * hero_scale,
    phase: scroll_distance < move_end ? 'hero'
      : scroll_distance < shrink_start ? 'intro'
        : scroll_distance < shrink_end ? 'shrink'
          : scroll_distance < release_start ? 'profile' : 'flow',
  }
}
