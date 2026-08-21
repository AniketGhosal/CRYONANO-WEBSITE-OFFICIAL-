// import { useState, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import { useAuth } from '@/context/AuthContext';
// import { X, Loader2 } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export const AuthModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', password: '' });
  
//   const { login } = useAuth();
  
//   // Prevent hydration errors by ensuring we only portal after mount
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMsg('');
    
//     const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';

//     try {
//       const res = await fetch(`http://localhost:5000${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
      
//       if (res.ok) {
//         login(data.token, data.user);
//         onSuccess(); // Triggers the PDF download immediately
//         onClose();   // Closes the modal
//       } else {
//         setErrorMsg(data.message || 'Authentication failed');
//       }
//     } catch (err) {
//       setErrorMsg('Network error connecting to secure server.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // If component hasn't mounted yet, don't attempt to portal
//   if (!mounted) return null;

//   // Render the modal directly into document.body using createPortal
//   return createPortal(
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
//           {/* Blurred Backdrop */}
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//           />

//           {/* Modal Box */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             className="bg-white rounded-[2rem] p-8 md:p-10 max-w-md w-full relative shadow-2xl border border-slate-200 z-10 overflow-hidden"
//           >
//             <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full">
//               <X className="w-5 h-5" />
//             </button>

//             <div className="mb-8">
//               <div className="w-12 h-12 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-center mb-4">
//                  <div className="w-4 h-4 bg-sky-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
//               </div>
//               <h3 className="font-display text-3xl font-black text-slate-900 uppercase tracking-tight">
//                 {isRegister ? 'Register Access' : 'Secure Sign In'}
//               </h3>
//               <p className="text-sm text-slate-500 font-medium mt-2">
//                 {isRegister ? 'Register your organization to download technical datasheets.' : 'Sign in to access secure technical documentation.'}
//               </p>
//             </div>

//             {errorMsg && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-600 uppercase tracking-widest text-center">
//                 {errorMsg}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {isRegister && (
//                 <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
//                   <input
//                     type="text" placeholder="Full Name" required
//                     className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   />
//                   <div className="grid grid-cols-2 gap-4">
//                     <input
//                       type="text" placeholder="Company Name"
//                       className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"
//                       onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                     />
//                     <input
//                       type="tel" placeholder="Phone Number"
//                       className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"
//                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     />
//                   </div>
//                 </motion.div>
//               )}
//               <input
//                 type="email" placeholder="Official Email Address" required
//                 className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//               <input
//                 type="password" placeholder="Password" required
//                 className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold focus:outline-none focus:border-sky-400 focus:bg-white transition-colors"
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />

//               <button disabled={isLoading} type="submit" className="w-full py-4 mt-2 bg-slate-900 text-white font-black rounded-xl shadow-lg hover:bg-sky-600 hover:-translate-y-0.5 transition-all uppercase tracking-wider flex items-center justify-center gap-2">
//                 {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isRegister ? 'Register & Download' : 'Sign In & Download')}
//               </button>
//             </form>

//             <div className="mt-8 pt-6 border-t border-slate-100 text-center">
//               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
//                 {isRegister ? 'Already registered?' : "Don't have access?"}{' '}
//                 <button type="button" onClick={() => { setIsRegister(!isRegister); setErrorMsg(''); }} className="text-sky-500 hover:text-sky-600 transition-colors ml-1">
//                   {isRegister ? 'Sign In' : 'Register Here'}
//                 </button>
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>,
//     document.body
//   );
// };


import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '@/context/AuthContext';
import { X, Loader2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AuthModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', password: '' });
  
  const { login } = useAuth();
  
  // Prevent hydration errors by ensuring we only portal after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    
    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';

    // try {
    //   const res = await fetch(`http://localhost:5000${endpoint}`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (res.ok) {
        login(data.token, data.user);
        onSuccess(); // Triggers the PDF download immediately
        onClose();   // Closes the modal
      } else {
        setErrorMsg(data.message || 'Authentication failed');
      }
    } catch (err) {
      setErrorMsg('Network error connecting to secure server.');
    } finally {
      setIsLoading(false);
    }
  };

  // If component hasn't mounted yet, don't attempt to portal
  if (!mounted) return null;

  // Render the modal directly into document.body using createPortal
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A2647]/80"
          />

          {/* Modal Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 max-w-md w-full relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-100 z-10 overflow-hidden"
          >
            {/* Top right decorative red glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full pointer-events-none" />

            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors p-2 rounded-full z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8 relative z-10">
              <div className="w-14 h-14 bg-red-50 rounded-2xl border border-red-100 flex items-center justify-center mb-5 shadow-inner">
                <ShieldCheck className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="font-display text-3xl font-black text-[#0A2647] uppercase tracking-tight">
                {isRegister ? 'Register Access' : 'Secure Sign In'}
              </h3>
              <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">
                {isRegister ? 'Register your organization to download restricted technical datasheets.' : 'Sign in to authenticate and access secure technical documentation.'}
              </p>
            </div>

            {errorMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-xs font-black text-red-600 uppercase tracking-widest text-center"
              >
                {errorMsg}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {isRegister && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
                  <input
                    type="text" placeholder="Full Name" required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0A2647] text-sm font-bold focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 focus:bg-white transition-all duration-300"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text" placeholder="Company Name"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0A2647] text-sm font-bold focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 focus:bg-white transition-all duration-300"
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    <input
                      type="tel" placeholder="Phone Number"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0A2647] text-sm font-bold focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 focus:bg-white transition-all duration-300"
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </motion.div>
              )}
              <input
                type="email" placeholder="Official Email Address" required
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0A2647] text-sm font-bold focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 focus:bg-white transition-all duration-300"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="password" placeholder="Password" required
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-[#0A2647] text-sm font-bold focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 focus:bg-white transition-all duration-300"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />

              <button 
                disabled={isLoading} 
                type="submit" 
                className="w-full py-4 mt-4 bg-red-600 text-white font-black rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:shadow-[0_8px_30px_rgba(220,38,38,0.5)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2"
              >
                {/* {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isRegister ? 'Register & Download' : 'Sign In & Download')} */}
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isRegister ? 'Create Account' : 'Sign In')}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {isRegister ? 'Already registered?' : "Don't have access?"}{' '}
                <button 
                  type="button" 
                  onClick={() => { setIsRegister(!isRegister); setErrorMsg(''); }} 
                  className="text-red-600 font-black hover:text-red-700 transition-colors ml-1 underline decoration-red-600/30 hover:decoration-red-600"
                >
                  {isRegister ? 'Sign In' : 'Register Here'}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};