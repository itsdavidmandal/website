import React, { useState, useEffect, useRef } from "react";

const OdometerAnimation = ({ triggerValue, endValue, label }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let observer;

    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        let interval = setInterval(() => {
          setCount((count) => {
            if (count < endValue) {
              return count + 1;
            } else {
              clearInterval(interval);
              return count;
            }
          });
        }, 100);

        return () => clearInterval(interval);
      }
    };

    if (containerRef.current) {
      observer = new IntersectionObserver(handleObserver, {
        threshold: triggerValue,
      });
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [triggerValue, endValue]);

  return (
    <div className="about-achievement" ref={containerRef}>
      <h1>{count === endValue ? `${endValue}+` : count}</h1>
      <p>{label}</p>
    </div>
  );
};

export default OdometerAnimation;
