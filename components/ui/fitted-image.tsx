import Image from "next/image"

type Props = {
  src: string
  alt: string
  sizes: string
  priority?: boolean
}

/**
 * Görseli kırpmadan kutuya sığdırır (object-contain). Boş kalan kenarları aynı görselin
 * bulanık ve düşük çözünürlüklü bir kopyası doldurur; dikey ve yatay fotoğraflar aynı
 * kutuda düzgün görünür. Kapsayıcının `relative` ve sabit bir yüksekliği olmalıdır.
 */
export function FittedImage({ src, alt, sizes, priority }: Props) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes="64px"
        quality={30}
        priority={priority}
        className="object-cover scale-110 blur-2xl opacity-60"
      />
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-contain" />
    </>
  )
}
