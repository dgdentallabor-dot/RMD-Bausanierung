import { X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyImprintModalProps {
  language: 'DE' | 'EN';
  isOpen: boolean;
  type: 'privacy' | 'imprint';
  onClose: () => void;
}

export default function PrivacyImprintModal({ language, isOpen, type, onClose }: PrivacyImprintModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      ></motion.div>

      {/* Modal Main Board */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 30 }}
        className="relative w-full max-w-3xl bg-matte-black border border-white/15 rounded-none overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
      >
        
        {/* Header */}
        <div className="p-6 bg-steel-gray/25 border-b border-white/10 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShieldAlert size={15} className="text-gold" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">
              {type === 'imprint' ? (language === 'DE' ? 'Impressum' : 'Imprint / Disclosure') : (language === 'DE' ? 'Datenschutzerklärung' : 'Privacy Policy')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white border border-transparent hover:border-white/10 rounded-none cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Terms Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-400 font-light leading-relaxed text-left font-serif">
          
          {type === 'imprint' ? (
            /* GERMAN IMPRESSUM (IMPRINT) MANDATE */
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// Angaben gemäß § 5 TMG</h3>
                <p>
                  Ramazan Sallaj RMD Bausanierung<br />
                  Ulmer Str. 6<br />
                  72574 Bad Urach, Deutschland
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// Vertreten durch</h3>
                <p>Ramazan Sallaj (Inhaber)</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// Kontaktmöglichkeiten</h3>
                <p>
                  Telefon: +49 (0) 1522 4941028<br />
                  E-Mail: rmd.bausanierung@gmail.com<br />
                  Webseite: https://www.rmd-bausanierung.de
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// Umsatzsteuer-Identifikationsnummer</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 333 444 555</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// Berufshaftpflichtversicherung</h3>
                <p>
                  Württembergische Versicherung AG<br />
                  Gutenbergstraße 30, 70176 Stuttgart<br />
                  Geltungsbereich: Bundesrepublik Deutschland (Bauleistungs- und Haftpflichtschäden)
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// EU-Streitschlichtung</h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="text-gold underline font-mono">
                    https://ec.europa.eu/consumers/odr
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// Verbraucherstreitbeilegung</h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          ) : (
            /* GERMAN DSGVO COMPLIANT PRIVACY POLICY */
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// 1. Datenschutz auf einen Blick</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// 2. Datenerfassung auf unserer Website</h3>
                <p>
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Auf dieser Website werden keine personenbezogenen Daten über Formulare oder Eingabefelder erhoben oder gespeichert. Wenn Sie mit uns in Kontakt treten möchten, geschieht dies ausschließlich direkt per Telefon, WhatsApp oder E-Mail. Technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs) werden beim Besuch der Seite automatisch durch den Webserver erfasst, um eine sichere Bereitstellung zu gewährleisten.
                </p>
                <p>
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Die technischen Serverdaten dienen ausschließlich der fehlerfreien und sicheren Bereitstellung der Website.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// 3. Analyse-Tools und Tools von Drittanbietern</h3>
                <p>
                  Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit
                  sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann
                  nicht zu Ihnen zurückverfolgt werden.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// 4. Ihre Rechte bezüglich Ihrer Daten</h3>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
                  verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum
                  angegebenen Adresse an uns wenden.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">// 5. Hosting und Server-Log-Files</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Files, die Ihr Browser
                  automatisch an uns übermittelt. Dies sind: Browsertyp, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden
                  Rechners und Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordnungsbar.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-steel-gray/25 border-t border-white/10 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gold hover:bg-gold-dark text-matte-black text-[10px] font-mono font-bold uppercase tracking-widest rounded-none transition-colors cursor-pointer"
          >
            {language === 'DE' ? 'Verstanden' : 'Understood'}
          </button>
        </div>

      </motion.div>
    </div>
  );
}
