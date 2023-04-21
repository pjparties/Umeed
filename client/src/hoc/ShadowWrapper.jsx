const ShadowWrapper = ({ children }) => {
  return (
    <div className="drop-shadow-lg">
      {children}
    </div>
  )
};

export default ShadowWrapper;