import BackgroundLine from "./BackgroundLine";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

export default function CashApp() {
  return (
    <div className="cash-app clip-contents">
      <div className="hero-section">
        <BackgroundLine />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
