"use client"
import { useState, useEffect } from 'react';
const Home = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const htime = time.getHours();
  const mtime = time.getMinutes();
  const stime = time.getSeconds();
  const hrotation = 30 * htime + mtime / 2;
  const mrotation = 6 * mtime;
  const srotation = 6 * stime;
  return (
    <main>
      <section>
        <div className="mt-[60px] h-[40vw] w-[40vw] relative m-auto bg-[url('../../public/clock.png')] bg-no-repeat [background-size:100%]">
          <div className="absolute bg-black rounded-xl [transform-origin:bottom] w-[1.8%] h-[25%] top-[25%] left-[48.85%] opacity-[0.8]" style={{ transform: `rotate(${hrotation}deg)` }} />
          <div className="absolute bg-black rounded-xl [transform-origin:bottom] w-[1.6%] h-[30%] top-[19%] left-[48.9%] opacity-[0.8]" style={{ transform: `rotate(${mrotation}deg)` }} />
          <div className="absolute bg-black rounded-xl [transform-origin:bottom] w-[1%] h-[40%] top-[9%] left-[49.25%] opacity-[0.8]" style={{ transform: `rotate(${srotation}deg)` }} />
        </div>
      </section>
    </main>
  )
}

export default Home;