const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl orb-animate" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl orb-animate-delayed" />
      <div className="absolute bottom-[-5%] left-[30%] w-[400px] h-[400px] rounded-full bg-primary/6 blur-3xl orb-animate" style={{ animationDelay: "-12s" }} />
    </div>
  );
};

export default BackgroundEffects;
