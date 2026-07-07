// background
export default function ClinicBackground({ bgImage }) {
  return (
    <>
      {/* Background Image  */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <img
          src={bgImage}
          alt="clinic background"
          className="w-full h-full object-cover scale-105
           blur-[0.5px] opacity-70 contrast-[1.02]
           brightness-[1.02] transition-all duration-700"
        />
      </div>

      {/* Dark/Light Overlay */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-b 
      from-white/60 via-sky-50/10 to-white"
      />

      {/* Aurora */}
      <div
        className="absolute -top-56 -left-44 w-[550px] h-[550px] rounded-full 
      bg-blue-400/20 blur-[120px] animate-pulse"
      />
      <div
        className="absolute top-40 -right-40 w-[450px] h-[450px] rounded-full 
      bg-sky-400/20 blur-[140px] animate-pulse"
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2
       w-[650px] h-[350px] rounded-full bg-blue-300/20 blur-[140px]"
      />

      {/* Mesh */}
      <div
        className="absolute inset-0 -z-10
       bg-[radial-gradient(circle_at_top_left,#38bdf81f,transparent_40%),radial-gradient(circle_at_bottom_right,#0ea5e91f,transparent_35%)]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(#94a3b81c 1px, transparent 1px),
            linear-gradient(90deg,#94a3b81c 1px,transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />

      {/* Glow Center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 
      -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sky-300/20 blur-[180px]"
      />

      {/* Floating Blur */}
      <div className="absolute top-28 left-24 w-20 h-20 rounded-full bg-cyan-300/30 blur-3xl animate-bounce" />
      <div className="absolute bottom-24 right-20 w-24 h-24 rounded-full bg-sky-300/30 blur-3xl animate-pulse" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
        
    </>
  );
}
