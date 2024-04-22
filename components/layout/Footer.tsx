import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
      <p>
        Powered by{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase{" "}
        </a>
        and{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js{" "}
        </a>
      </p>
    </footer>
  )
}

export default Footer