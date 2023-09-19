import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <video autoPlay loop muted >
        <source src='https://drive.google.com/file/d/1PPAuoabdXL7uU9DHqQk5UXShbPsYZz9Q/preview' type="video/mp4" />
      </video>
    </main>
  )
}
