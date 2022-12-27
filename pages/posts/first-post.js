import Link from "next/link";

const FirstPost = () => {
    return (
        <>
            <h1>First post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}

export default FirstPost;
