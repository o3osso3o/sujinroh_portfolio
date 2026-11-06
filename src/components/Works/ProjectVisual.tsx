import type { ProjectImage } from '../../types/portfolio'

export default function ProjectVisual({ image, title }: { image: ProjectImage | null; title: string }) {
  return (
    <span className="works_visual">
      {image ? (
        <img src={image.src} alt={image.alt} width={image.width} height={image.height}
          loading="lazy" style={{ objectFit: image.fit ?? 'contain', objectPosition: image.position ?? 'center' }} />
      ) : (
        <span className="works_image_placeholder" role="img" aria-label={`${title} 이미지 준비 중`}>
          <span aria-hidden="true">{title}</span>
          <span aria-hidden="true">IMAGE COMING SOON</span>
        </span>
      )}
    </span>
  )
}
