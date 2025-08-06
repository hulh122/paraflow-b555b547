interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[rgba(249,249,247,1)] flex justify-center">
      {children}
    </div>
  );
};

export default Layout;