import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

export default function TossableCard() {
  const [{ x, y, rotate }, api] = useSpring(() => ({ x: 0, y: 0, rotate: 0 }));

  const bind = useDrag(
    ({
      down,
      movement: [mx, my],
      direction: [dx, dy],
      velocity: [vx, vy],
      last,
      memo,
    }) => {
      // Use memo to persist the last position
      if (!memo) {
        memo = [x.get(), y.get(), 0]; // Start from the current spring values
      }
      const [startX, startY] = memo;

      window.visualViewport?.height || window.innerHeight;

      if (down) {
        api.start({
          x: startX + mx,
          y: startY + my,
          immediate: true,
        });
      } else if (last) {
        const throwMultiplier = 150;
        const targetX = startX + mx + dx * vx * throwMultiplier;
        const targetY = startY + my + dy * vy * throwMultiplier;

        const rotation = dx * vx * 50;

        memo = [x.get(), y.get(), rotation];
        api.start({
          x: targetX,
          y: targetY,
          rotate: rotation,
          immediate: false,
          config: { mass: 0.5, tension: 100, friction: 26 },
        });

        memo = [targetX, targetY];
      }

      return memo;
    }
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <animated.div
        className={'bg-slate-50'}
        {...bind()}
        style={{
          position: 'absolute',
          zIndex: 9999,
          width: 200,
          height: 300,
          borderRadius: 8,
          touchAction: 'none',
          willChange: 'transform',
          x,
          y,
          rotate,
          cursor: 'grab',
        }}
      >
        Hello World
      </animated.div>
      <animated.div
        className={'bg-black/10'}
        {...bind()}
        style={{
          position: 'absolute',
          zIndex: 9998,
          width: 200,
          height: 300,
          borderRadius: 8,
          touchAction: 'none',
          willChange: 'transform',
          x: x.to((value) => value + 5),
          y: y.to((value) => value + 5),
          rotate,
          cursor: 'grab',
          // boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
        }}
      ></animated.div>
    </div>
  );
}
