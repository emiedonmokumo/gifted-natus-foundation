import { Suspense } from 'react'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
            <h1>dashboard</h1>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <h1>dashboard</h1>
      </Suspense>
    </section>
  )
}