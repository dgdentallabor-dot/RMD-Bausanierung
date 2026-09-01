import { X, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

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
        className="relative w-full max-w-4xl bg-matte-black border border-white/15 rounded-none overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
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
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-300 font-light leading-relaxed text-left">
          
          {type === 'imprint' ? (
            /* GERMAN IMPRESSUM (IMPRINT) MANDATE */
            <div className="space-y-6 font-sans">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider text-gold">// Angaben gemäß § 5 TMG</h3>
                <p>
                  Ramazan Sallaj<br />
                  RMD Bausanierung<br />
                  Ulmer Str. 6<br />
                  72574 Bad Urach, Deutschland
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider text-gold">// Vertreten durch</h3>
                <p>Ramazan Sallaj (Inhaber)</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider text-gold">// Kontaktmöglichkeiten</h3>
                <p>
                  Telefon: +49 (0) 172 9081394<br />
                  E-Mail: rmd.bausanierung@gmail.com
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider text-gold">// EU-Streitschlichtung</h3>
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
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider text-gold">// Verbraucherstreitbeilegung</h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          ) : (
            /* EXACT USER PROVIDED DSGVO DATENSCHUTZERKLÄRUNG */
            <div className="space-y-6 font-sans">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">1. Allgemeine Hinweise</h2>
                <p>Der Schutz Ihrer personenbezogenen Daten ist uns wichtig.</p>
                <p>
                  Diese Website dient ausschließlich der Präsentation unseres Unternehmens und unserer Leistungen. Über diese Website werden <strong>keine personenbezogenen Daten aktiv erhoben, gespeichert oder ausgewertet</strong>.
                </p>
                <p>Insbesondere verwenden wir:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>kein Kontaktformular,</li>
                  <li>keine Benutzerregistrierung oder Kundenkonten,</li>
                  <li>keine Newsletter-Anmeldung,</li>
                  <li>keine Analyse- oder Tracking-Dienste,</li>
                  <li>kein Google Analytics,</li>
                  <li>keinen Meta Pixel,</li>
                  <li>keine eingebetteten Google-Maps-Dienste,</li>
                  <li>keine Marketing- oder Tracking-Cookies und</li>
                  <li>keine sonstigen Technologien zur Erstellung von Nutzerprofilen.</li>
                </ul>
                <p>
                  Unabhängig davon können beim technischen Aufruf einer Website bestimmte Verbindungsdaten durch den Hostinganbieter verarbeitet werden. Hierüber informieren wir nachfolgend.
                </p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">2. Verantwortlicher</h2>
                <p>Verantwortlicher für diese Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <div className="p-4 bg-zinc-900/60 border border-white/10 space-y-1">
                  <p className="text-white font-bold">Ramazan Sallaj</p>
                  <p className="text-white font-bold">RMD Bausanierung</p>
                  <p>Ulmer Str. 6</p>
                  <p>72574 Bad Urach</p>
                  <p>Deutschland</p>
                  <p className="pt-2"><strong>Telefon:</strong> +49 (0) 172 9081394</p>
                  <p><strong>E-Mail:</strong> <a href="mailto:rmd.bausanierung@gmail.com" className="text-gold underline font-mono">rmd.bausanierung@gmail.com</a></p>
                </div>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">3. Hosting</h2>
                <p>Diese Website wird bei <strong>Hostinger</strong> gehostet.</p>
                <p>Für Kunden innerhalb der Europäischen Union erfolgt die Bereitstellung der Hosting-Dienstleistungen grundsätzlich durch:</p>
                <div className="p-3 bg-zinc-900/40 border border-white/10">
                  <p className="text-white font-medium">Hostinger International Limited</p>
                  <p>61 Lordou Vironos Street</p>
                  <p>6023 Larnaca</p>
                  <p>Zypern</p>
                </div>
                <p>
                  Auch wenn auf unserer Website selbst keine personenbezogenen Daten aktiv abgefragt oder erhoben werden, können beim Aufruf der Website technisch erforderliche Daten durch den Webserver bzw. Hostinganbieter verarbeitet werden.
                </p>
                <p>Hierzu können insbesondere gehören:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>IP-Adresse des zugreifenden Geräts,</li>
                  <li>Datum und Uhrzeit des Zugriffs,</li>
                  <li>aufgerufene Seite oder Datei,</li>
                  <li>Browsertyp und Browserversion,</li>
                  <li>verwendetes Betriebssystem,</li>
                  <li>Referrer-URL,</li>
                  <li>Hostname des zugreifenden Geräts sowie</li>
                  <li>technische Status- und Verbindungsinformationen.</li>
                </ul>
                <p>
                  Diese Verarbeitung ist technisch erforderlich, um die Website sicher und zuverlässig auszuliefern, die Stabilität und Funktionsfähigkeit des Servers zu gewährleisten sowie mögliche technische Störungen und Sicherheitsangriffe erkennen und abwehren zu können.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren, stabilen und technisch fehlerfreien Bereitstellung dieser Website.
                </p>
                <p>
                  Soweit Hostinger personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt dies auf Grundlage eines Vertrages über die Auftragsverarbeitung gemäß Art. 28 DSGVO.
                </p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">4. Keine Analyse, kein Tracking und keine Werbung</h2>
                <p>Auf dieser Website werden <strong>keine Analyse- oder Tracking-Systeme eingesetzt</strong>.</p>
                <p>Wir verwenden insbesondere weder Google Analytics noch Meta Pixel oder vergleichbare Analyse-, Werbe- oder Tracking-Dienste.</p>
                <p>Es findet durch uns keine Analyse des individuellen Nutzungsverhaltens, kein Profiling und keine personalisierte Werbung auf Grundlage des Besuchs dieser Website statt.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">5. Cookies</h2>
                <p>Diese Website setzt nach unserem derzeitigen technischen Stand <strong>keine nicht erforderlichen Cookies zu Analyse-, Marketing- oder Trackingzwecken</strong> ein.</p>
                <p>Insbesondere werden keine Cookies verwendet, um Besucher über mehrere Websites hinweg zu verfolgen, Nutzerprofile zu erstellen oder personalisierte Werbung auszuspielen.</p>
                <p>Sollten aufgrund rein technischer Funktionen des Hostinganbieters technisch notwendige Informationen auf dem Endgerät gespeichert oder ausgelesen werden, erfolgt dies ausschließlich im gesetzlich zulässigen Umfang.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">6. Keine Kontaktformulare und keine Registrierung</h2>
                <p>Auf dieser Website werden keine Kontakt-, Bestell-, Buchungs- oder Registrierungsformulare bereitgestellt.</p>
                <p>Besucher können daher über die Website selbst keine personenbezogenen Daten in Formulare eingeben oder Benutzerkonten anlegen.</p>
                <p>Eine automatisierte Speicherung von Namen, Anschriften, Telefonnummern oder E-Mail-Adressen über ein Websiteformular findet nicht statt.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">7. Kontaktaufnahme per Telefon oder E-Mail</h2>
                <p>Auf unserer Website stellen wir lediglich unsere geschäftlichen Kontaktdaten zur Verfügung.</p>
                <p>Wenn Sie uns freiwillig per Telefon oder E-Mail kontaktieren, werden die von Ihnen dabei übermittelten Informationen ausschließlich zur Bearbeitung Ihrer Anfrage und – soweit erforderlich – zur Vorbereitung oder Durchführung eines Vertragsverhältnisses verwendet.</p>
                <p>Die Verarbeitung erfolgt, soweit die Kontaktaufnahme auf einen Vertrag oder vorvertragliche Maßnahmen gerichtet ist, auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
                <p>Bei sonstigen geschäftlichen Anfragen kann die Verarbeitung auf Grundlage unseres berechtigten Interesses an der Bearbeitung der jeweiligen Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO erfolgen.</p>
                <p>Die Daten werden nicht ohne Rechtsgrundlage zu Werbezwecken verwendet oder an unberechtigte Dritte verkauft.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">8. WhatsApp</h2>
                <p>Unsere Website kann einen einfachen Link enthalten, über den Sie freiwillig eine Kommunikation über WhatsApp beginnen können.</p>
                <p>Der WhatsApp-Dienst wird nicht in die Website eingebettet. Durch den bloßen Besuch unserer Website wird aufgrund dieses Links keine WhatsApp-Kommunikation ausgelöst.</p>
                <p>Erst wenn Sie den entsprechenden Link aktiv auswählen, verlassen Sie unsere Website bzw. öffnen den WhatsApp-Dienst.</p>
                <div className="p-3 bg-zinc-900/40 border border-white/10">
                  <p className="text-white font-medium">Anbieter innerhalb des Europäischen Wirtschaftsraums ist:</p>
                  <p>WhatsApp Ireland Limited</p>
                  <p>Merrion Road, Dublin 4, D04 X2K5, Irland</p>
                </div>
                <p>Wenn Sie sich freiwillig über WhatsApp an uns wenden, werden die von Ihnen dort bereitgestellten Daten zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet.</p>
                <p>Die weitere technische Datenverarbeitung durch WhatsApp liegt im Verantwortungsbereich des jeweiligen Anbieters und richtet sich nach dessen Datenschutzbestimmungen.</p>
                <p>Alternativ können Sie uns jederzeit telefonisch oder per E-Mail kontaktieren.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">9. Externe Links und soziale Netzwerke</h2>
                <p>Unsere Website enthält gegebenenfalls einfache externe Links zu unseren Auftritten oder zu Seiten auf Plattformen wie <strong>Instagram, Facebook und YouTube</strong>.</p>
                <p>Dabei handelt es sich ausschließlich um Verlinkungen. Die entsprechenden Dienste sind nicht als Analyse- oder Trackingwerkzeuge in unsere Website eingebunden.</p>
                <p>Beim bloßen Besuch unserer Website erfolgt aufgrund dieser Links grundsätzlich keine aktive Übermittlung personenbezogener Daten durch uns an die jeweiligen Plattformbetreiber.</p>
                <p>Erst wenn Sie einen solchen Link aktiv anklicken, verlassen Sie unsere Website. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen und Datenverarbeitungsbedingungen des jeweiligen externen Anbieters.</p>
                <p>Auf die anschließende Datenverarbeitung durch den jeweiligen Plattformbetreiber haben wir keinen vollständigen Einfluss.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">10. Technische Entwicklung und Betreuung</h2>
                <p>Die Website wurde technisch entwickelt und kann im Rahmen von Wartung, Fehlerbehebung und technischer Weiterentwicklung betreut werden durch:</p>
                <div className="p-3 bg-zinc-900/40 border border-white/10">
                  <p className="text-white font-bold">Assistant Bulgaria LTD</p>
                  <p>Bulgarien</p>
                </div>
                <p>Im Rahmen der technischen Entwicklung und Wartung ist eine Verarbeitung personenbezogener Daten nicht beabsichtigt.</p>
                <p>Sollte im Rahmen notwendiger technischer Arbeiten ausnahmsweise Zugriff auf personenbezogene technische Daten, beispielsweise Server- oder Protokolldaten, erforderlich sein, erfolgt dieser ausschließlich im notwendigen Umfang und unter Beachtung der geltenden datenschutzrechtlichen Vorschriften.</p>
                <p>Soweit Assistant Bulgaria LTD personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet, erfolgt dies nach Maßgabe von Art. 28 DSGVO.</p>
                <p>Bulgarien ist Mitgliedstaat der Europäischen Union. Eine Verarbeitung in Bulgarien stellt daher keine Übermittlung personenbezogener Daten in ein Drittland im Sinne der Art. 44 ff. DSGVO dar.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">11. SSL-/TLS-Verschlüsselung</h2>
                <p>Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung, um die sichere Übertragung von Daten zwischen Ihrem Browser und dem Webserver zu gewährleisten.</p>
                <p>Eine verschlüsselte Verbindung erkennen Sie insbesondere daran, dass die Internetadresse mit „https://“ beginnt.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">12. Keine automatisierte Entscheidungsfindung und kein Profiling</h2>
                <p>Auf dieser Website findet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO statt.</p>
                <p>Es werden insbesondere keine Nutzerprofile auf Grundlage des Besucherverhaltens erstellt.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">13. Weitergabe personenbezogener Daten</h2>
                <p>Eine Weitergabe personenbezogener Daten, die im Zusammenhang mit dem Besuch dieser Website verarbeitet werden, erfolgt nur, soweit dies technisch erforderlich, gesetzlich vorgeschrieben oder aufgrund einer sonstigen Rechtsgrundlage zulässig ist.</p>
                <p>Eine Veräußerung von Besucherdaten findet nicht statt.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">14. Ihre Rechte</h2>
                <p>Soweit personenbezogene Daten von Ihnen verarbeitet werden, stehen Ihnen nach Maßgabe der gesetzlichen Voraussetzungen insbesondere folgende Rechte zu:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li><strong>Auskunft</strong> gemäß Art. 15 DSGVO,</li>
                  <li><strong>Berichtigung</strong> gemäß Art. 16 DSGVO,</li>
                  <li><strong>Löschung</strong> gemäß Art. 17 DSGVO,</li>
                  <li><strong>Einschränkung der Verarbeitung</strong> gemäß Art. 18 DSGVO,</li>
                  <li><strong>Datenübertragbarkeit</strong> gemäß Art. 20 DSGVO,</li>
                  <li><strong>Widerspruch</strong> gemäß Art. 21 DSGVO sowie</li>
                  <li><strong>Widerruf einer erteilten Einwilligung</strong> gemäß Art. 7 Abs. 3 DSGVO.</li>
                </ul>
                <p>Zur Ausübung Ihrer Rechte können Sie sich jederzeit an die oben genannten Kontaktdaten wenden.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">15. Beschwerderecht bei der Datenschutzaufsichtsbehörde</h2>
                <p>Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Auffassung sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen datenschutzrechtliche Vorschriften verstößt.</p>
                <p>Für ein Unternehmen mit Sitz in Baden-Württemberg ist insbesondere zuständig:</p>
                <div className="p-3 bg-zinc-900/40 border border-white/10">
                  <p className="text-white font-medium">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI Baden-Württemberg)</p>
                </div>
                <p>Das Recht, sich an eine andere gesetzlich zuständige Datenschutzaufsichtsbehörde zu wenden, bleibt unberührt.</p>
              </div>

              <div className="h-[1px] bg-white/10 my-4"></div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider text-gold">16. Änderung dieser Datenschutzerklärung</h2>
                <p>Sollten zukünftig zusätzliche Funktionen in diese Website integriert werden – beispielsweise Kontaktformulare, Analysewerkzeuge, externe Karten, eingebettete Videos, Newsletter, Marketing-Technologien oder andere Dienste, die personenbezogene Daten verarbeiten – wird diese Datenschutzerklärung entsprechend angepasst.</p>
                <p className="text-gold font-mono font-bold pt-2">Stand: September 2026</p>
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
            {language === 'DE' ? 'Schließen' : 'Close'}
          </button>
        </div>

      </motion.div>
    </div>
  );
}
