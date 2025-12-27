import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import StatsBar from "./components/StatsBar/StatsBar";
import ParticipatingSchools from "./components/ParticipatingSchools/ParticipatingSchools";
import PreSchedule from "./components/PreSchedule/PreSchedule";
import "./App.css";
import Footer from "./components/Footer/Footer";
import MustVisit from "./components/MustVisit/MustVisit";

export default function App() {
  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Stats / Trust Indicators */}
      <StatsBar />

      {/* Participating Schools */}
      <ParticipatingSchools />

      {/* Pre Schedule Appointment */}
      <PreSchedule />
      <MustVisit />
      <Footer />
    </>
  );
}
