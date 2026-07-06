import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import Mainpage from '../src/pages/Mainpage'
import { Route, Routes, useLocation } from 'react-router-dom'
import Services from './pages/Services'
import Project from './pages/Project'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import AdminPage from './pages/AdminPage'
import AdminHeader from './components/AdminHeader'
import AdminFooter from './components/AdminFooter'
import AdminDashboard from './pages/AdminDasboard'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
    });
  }, []);

  // Buttery smooth scrolling (Lenis) kept in sync with GSAP ScrollTrigger.
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On every route change: jump to top and recalculate scroll triggers.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [location.pathname]);

  // Safety net: if the preloader animation ever fails to finish, unlock the UI.
  useEffect(() => {
    const fallbackTimer = setTimeout(() => setIsLoading(false), 4000)
    return () => clearTimeout(fallbackTimer)
  }, [])

  const isAdminExact = location.pathname === '/admin'
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      <ScrollProgress />
      {!isAdminExact && (isAdmin ? <AdminHeader /> : <Header />)}

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!isAdminExact && (isAdmin ? <AdminFooter /> : <Footer />)}
    </>
  )
}

export default App
