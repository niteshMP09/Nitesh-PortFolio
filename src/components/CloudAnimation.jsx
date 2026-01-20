const CloudAnimation = () => {
  // Generate 50 snowflakes with random properties
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 10 + Math.random() * 20,
    animationDelay: Math.random() * 10,
    size: 4 + Math.random() * 8,
    opacity: 0.3 + Math.random() * 0.7
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-[-10px] bg-white rounded-full animate-[fall_linear_infinite]"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity
          }}
        />
      ))}
    </div>
  )
}

export default CloudAnimation
