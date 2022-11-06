import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Link href="/blog/1">ブログ1</Link>
      <Link href="/blog/2">ブログ2</Link>
      <Link href="/blog/3">ブログ3</Link>
      <div>{children}</div>
    </div>
  )
}
