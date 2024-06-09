import Link from "next/link";
import Header from '@/components/header'

export default function Home() {
    return (
        <main>
            <h1>Blog</h1>
            <Link href="/blog/post-1">POST1</Link>
            <Link href="/blog/post-2">POST2</Link>
        </main>
    );
}
