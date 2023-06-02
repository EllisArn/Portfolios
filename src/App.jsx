import React, { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase.js'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = import.meta.env.VITE_EMAIL
const password = import.meta.env.VITE_PASSWORD

let portfolioName = 'LB165'

console.log('test')

auth()

function auth() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    })
}

function App() {
  const [portfolio, setPortfolio] = useState(null)

  useEffect(() => {
    const fetchPortfolio = async () => {
      const docRef = doc(db, 'portfolios', portfolioName)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        let temp = {}
        for (let i = 0; i < docSnap.data()[portfolioName].length; i++) {
          temp = { ...temp, ...docSnap.data()[portfolioName][i] }
          setPortfolio(temp)
        }
      } else {
        setPortfolio(null)
        alert('No such document!')
      }
    }
    fetchPortfolio()
  }, [])

  if (!portfolio) {
    return <div>Loading...</div>
  }

  const { ...allFields } = portfolio
  console.log(portfolio)

  return (
    <div>
      <ul>
        {Object.entries(allFields).map(([key, value]) => (
          <li key={key}>
            <div dangerouslySetInnerHTML={{ __html: value }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
async function importData() {
  const data = {
    LA1303: [
      {
        Aufgabenstellung:
          '<div class="bt-text gridstackblock card card-secondary  clearfix " id="blockinstance_181700">\n        \n    \n        <h2 class="title card-header js-heading">\n            \n\n            <span class="collapse-inline">\n                Aufgabenstellung\n                \n            </span>\n\n            \n\n        </h2>\n    \n\n    <div class="block"  id="blockinstance_181700_target" data-blocktype-noajax="181700">\n        \n        \n            \n\n<div class="textblock card-body flush">\n<p>Im Projekt 1303 hatten wir die Vorgabe, an f\u00fcnf Unterrichtstagen ein Produkt mit dem Thema "Codes, NoSQL und Backend" zu planen und zu realisieren. Da wir die Module f\u00fcr backend und NoSQL noch nicht hatten, habe ich mich f\u00fcr Codierung (Codes) entschieden. Ich habe mich dazu entschieden, in Einzelarbeit eine Webseite f\u00fcr das Umrechnen von Zahlensystemen zu erstellen.</p>\n</div>\n\n\n        \n    </div>\n</div>\n',
      },
      {
        Ziele:
          '<div class="bt-text gridstackblock card card-secondary  clearfix " id="blockinstance_181701">\n        \n    \n        <h2 class="title card-header js-heading">\n            \n\n            <span class="collapse-inline">\n                Ziele\n                \n            </span>\n\n            \n\n        </h2>\n    \n\n    <div class="block"  id="blockinstance_181701_target" data-blocktype-noajax="181701">\n        \n        \n            \n\n<div class="textblock card-body flush">\n<p>Meine Ziele waren wie folgt:<br>- Der Benutzer soll das Zahlensystem, das er umrechnen will, mit einem Dropdown ausw\u00e4hlen k\u00f6nnen.<br>- Die Umrechnungen sollen manuell geschrieben sein und nicht mit vorhandenen Funktionen.<br>- Der Benutzer soll folgende Zahlensysteme umrechnen k\u00f6nnen:<br>\u00a0 \u00a0 - Dezimal<br>\u00a0 \u00a0 - Bin\u00e4r<br>\u00a0 \u00a0 - Hexadezimal<br>\u00a0 \u00a0 - Oktal<br>- Der Benutzer soll \u00fcber einen Copy-Button die Ausgabe Kopieren k\u00f6nnen.<br>- Der Benutzer soll \u00fcber einen Download-Button die Ausgabe in .txt oder .bin herunterladen k\u00f6nnen.<br>- Fehleingaben sollen nicht eingegeben werden k\u00f6nnen.</p>\n</div>\n\n\n        \n    </div>\n</div>\n',
      },
      {
        Produkt:
          '<div class="bt-text gridstackblock card card-secondary  clearfix " id="blockinstance_181702">\n        \n    \n        <h2 class="title card-header js-heading">\n            \n\n            <span class="collapse-inline">\n                Produkt\n                \n            </span>\n\n            \n\n        </h2>\n    \n\n    <div class="block"  id="blockinstance_181702_target" data-blocktype-noajax="181702">\n        \n        \n            \n\n<div class="textblock card-body flush">\n<p>Das Produkt ist eine Webseite, auf der man die verschiedenen Zahlensysteme in die anderen Zahlensysteme umwandeln kann.<br>Unten sehen Sie noch die Demonstration des Produktes. Wenn Sie die Webseite selber testen wollen, k\u00f6nnen Sie das hier zun:<br><a href="https://ellisarn.github.io/Converter/" target="_blank" rel="noreferrer noopener">https://ellisarn.github.io/Converter/</a></p>\n</div>\n\n\n        \n    </div>\n</div>\n',
      },
      {
        Demonstration:
          '<div class="bt-internalmedia gridstackblock card card-secondary  clearfix " id="blockinstance_181706">\n        \n        <div class="block-header d-none details-comments ">\n    \n        \n        <a class="detailslink modal_link list-group-heading "\n            data-bs-toggle="modal-docked"\n            data-bs-target="#configureblock"\n            href="#"\n            data-blockid="181706"\n            data-artefactid="100117"\n            title="Details">\n            <span class="icon icon-search-plus bh-details-only" role="presentation" aria-hidden="true" title="Details"></span>\n            \n                Details\n            \n        </a>\n    \n</div>\n\n    \n    \n        <h2 class="title card-header js-heading">\n            \n\n            <span class="collapse-inline">\n                Demonstration\n                \n            </span>\n\n            \n\n        </h2>\n    \n\n    <div class="block"  id="blockinstance_181706_target" data-blocktype-noajax="181706">\n        \n        \n            <div class="mediaplayer-container card-body flush"><div class="mediaplayer">\n        <video\n            id="video_181706_100117"\n            class="video-js vjs-default-skin vjs-big-play-centered"\n            width="900"\n            height="600"\n        >\n            <source src="../../../export_info/files/100117-2023-02-05 21-04-33_Trim.mp4" type="video/mp4"/>\n            Ihr Webbrowser kann diese Mediendatei nicht abspielen.\n        </video></div></div>\n\n        \n    </div>\n</div>\n',
      },
      {
        Download:
          '<div class="bt-filedownload gridstackblock card card-secondary  clearfix " id="blockinstance_181705">\n        \n    \n        <h2 class="title card-header js-heading">\n            \n\n            <span class="collapse-inline">\n                Download\n                \n            </span>\n\n            \n\n        </h2>\n    \n\n    <div class="block"  id="blockinstance_181705_target" data-blocktype-noajax="181705">\n        \n        \n            <div class="file-download-list">\n    <ul class="list-group">\n    \n        \n            \n        \n        <div class="block-header d-none details-comments btn-top-right btn-group-top bh-displayiconsonly">\n    \n        \n        <a class="detailslink modal_link list-group-heading btn btn-secondary"\n            data-bs-toggle="modal-docked"\n            data-bs-target="#configureblock"\n            href="#"\n            data-blockid="181705"\n            data-artefactid="100116"\n            title="Details">\n            <span class="icon icon-search-plus bh-details-only" role="presentation" aria-hidden="true" title="Details"></span>\n            \n        </a>\n    \n</div>\n\n        <li class="filedownload-item list-group-item flush">\n            \n            <a class="modal_link file-icon-link" data-bs-toggle="modal-docked" data-bs-target="#configureblock" href="#" data-artefactid="100116" data-blockid="181705" title="Doku_LA1303.docx">\n                \n                    <span class="icon icon-file icon-lg left text-default file-icon" role="presentation" aria-hidden="true"></span>\n                \n            </a>\n            \n\n            <h3 class="title list-group-item-heading">\n            \n            <a class="modal_link" title="" data-bs-toggle="modal-docked" data-bs-target="#configureblock" href="#" data-blockid="181705" data-artefactid="100116">\n                Doku_LA1303.docx\n                <span class="visually-hidden">Einzelheiten</span>\n            </a>\n            \n            </h3>\n\n            <a href="../../../export_info/files/100116-Doku_LA1303.docx" class="download-link">\n                <span class="icon icon-download icon-lg float-end text-watermark icon-action" role="presentation" aria-hidden="true" data-bs-toggle="tooltip" title="Download Doku_LA1303.docx [58.4KB]"></span>\n                <span class="visually-hidden">Download Doku_LA1303.docx [58.4KB]}</span>\n            </a>\n\n            \n        </li>\n        \n        \n            \n        \n        <div class="block-header d-none details-comments btn-top-right btn-group-top bh-displayiconsonly">\n    \n        \n        <a class="detailslink modal_link list-group-heading btn btn-secondary"\n            data-bs-toggle="modal-docked"\n            data-bs-target="#configureblock"\n            href="#"\n            data-blockid="181705"\n            data-artefactid="100118"\n            title="Details">\n            <span class="icon icon-search-plus bh-details-only" role="presentation" aria-hidden="true" title="Details"></span>\n            \n        </a>\n    \n</div>\n\n        <li class="filedownload-item list-group-item flush">\n            \n            <a class="modal_link file-icon-link" data-bs-toggle="modal-docked" data-bs-target="#configureblock" href="#" data-artefactid="100118" data-blockid="181705" title="Converter.zip">\n                \n                    <span class="icon icon-archive icon-lg left text-default file-icon" role="presentation" aria-hidden="true"></span>\n                \n            </a>\n            \n\n            <h3 class="title list-group-item-heading">\n            \n            <a class="modal_link" title="" data-bs-toggle="modal-docked" data-bs-target="#configureblock" href="#" data-blockid="181705" data-artefactid="100118">\n                Converter.zip\n                <span class="visually-hidden">Einzelheiten</span>\n            </a>\n            \n            </h3>\n\n            <a href="../../../export_info/files/100118-Converter.zip" class="download-link">\n                <span class="icon icon-download icon-lg float-end text-watermark icon-action" role="presentation" aria-hidden="true" data-bs-toggle="tooltip" title="Download Converter.zip [4.9KB]"></span>\n                <span class="visually-hidden">Download Converter.zip [4.9KB]}</span>\n            </a>\n\n            \n        </li>\n        \n    </ul>\n</div>\n\n        \n    </div>\n</div>\n',
      },
      {
        Auswertung:
          '<div class="bt-text gridstackblock card card-secondary  clearfix " id="blockinstance_181703">\n        \n    \n        <h2 class="title card-header js-heading">\n            \n\n            <span class="collapse-inline">\n                Auswertung\n                \n            </span>\n\n            \n\n        </h2>\n    \n\n    <div class="block"  id="blockinstance_181703_target" data-blocktype-noajax="181703">\n        \n        \n            \n\n<div class="textblock card-body flush">\n<p><strong>Man soll das Zahlensystem, das man umrechnen will, mit einem Dropdown ausw\u00e4hlen k\u00f6nnen.</strong></p>\n<p>Wie Sie bei Sekunden 0:10, 0:21 und 0:30 sehen k\u00f6nnen, kann man die Systeme mit einem Dropdown ausw\u00e4hlen.</p>\n<p><strong>Die Umrechnungen sollen manuell geschrieben sein und nicht mit vorhandenen Funktionen.</strong></p>\n<p>Wenn Sie die Webseite herunterladen (oben bei Downloads Converter.zip) und sich die Funktionen ansehen, k\u00f6nnen Sie sehen, dass die Umrechnungen alle von Hand geschrieben sind.</p>\n<p><strong>Man soll folgende Zahlensysteme umrechnen k\u00f6nnen: </strong><strong>Dezimal, </strong><strong>Bin\u00e4r, </strong><strong>Hexadezimal, </strong><strong>Oktal</strong></p>\n<p>Wie Sie oben im Video sehen k\u00f6nnen, werden die Zahlensysteme korrekt umgerechnet. Falls Sie sich nicht sicher sind, da es schon eher grosse Zahlen sind, k\u00f6nnen Sie nachrechnen.</p>\n<p><strong>Der Benutzer soll \u00fcber einen Copy-Button die Ausgabe Kopieren k\u00f6nnen.</strong></p>\n<p>Bei Sekunde 0:40 bis 0:45 k\u00f6nnen Sie sehen, dass die Ausgabe erfolgreich kopiert wurde.</p>\n<p><strong>Der Benutzer soll \u00fcber einen Download-Button die Ausgabe in .txt oder .bin herunterladen k\u00f6nnen.</strong></p>\n<p>Wie Sie von Sekunde 0:46 bis zum Ende sehen k\u00f6nnen, wurden alle Dateien richtig heruntergeladen.</p>\n<p><strong>Fehleingaben sollen nicht eingegeben werden k\u00f6nnen.</strong></p>\n<p>Wenn Sie unten links auf die Tastatur schauen, w\u00e4hrend ich eine Eingabe mache, k\u00f6nnen Sie sehen, dass die ung\u00fcltigen Eingaben nicht zugelassen werden.</p>\n</div>\n\n\n        \n    </div>\n</div>\n',
      },
      {
        Reflexion:
          '<div class="bt-text gridstackblock card card-secondary  clearfix " id="blockinstance_181704">\n        \n    \n        <h2 class="title card-header js-heading">\n            \n\n            <span class="collapse-inline">\n                Reflexion\n                \n            </span>\n\n            \n\n        </h2>\n    \n\n    <div class="block"  id="blockinstance_181704_target" data-blocktype-noajax="181704">\n        \n        \n            \n\n<div class="textblock card-body flush">\n<p>Anfangs, als ich am recherchieren war, habe ich herausgefunden, dass es bereits Funktionen in JavaScript gibt, die das Umrechnen f\u00fcr einen \u00fcbernehmen. Da ich aber eine Webseite machen wollte, bei der ich mein Wissen aus dem Modul 114 benutze und es den ganzen Sinn vom Lernatelier nimmt, habe ich mich dagegen entschieden. Durch diese Entscheidung konnte ich meine Erkenntnisse in dem Thema vertiefen.</p>\n<p>Das Projekt 1303 ist f\u00fcr mich eigentlich ganz gut gelaufen. Die gr\u00f6sste H\u00fcrde, die ich hatte war ganz an Ende, da ich zu der Zeit das Portfolio h\u00e4tte schreiben m\u00fcssen aber ich sehr krank wurde und keine Kraft dazu hatte. Sonst lief das Projekt aber gut.</p>\n<p>Im Vergleich zum Projekt 1302, welches ich aus Gr\u00fcnden mangelhafter Planung nicht fertig bekommen habe, habe ich dieses Mal viel besser geplant und meine F\u00e4higkeiten nicht so \u00fcbersch\u00e4tzt.</p>\n</div>\n\n\n        \n    </div>\n</div>\n',
      },
    ],
  }

  try {
    await setDoc(doc(db, 'portfolios', 'LA1303-2'), data)
  } catch (e) {
    console.error('Fehler beim Hinzufügen des Dokuments: ', e)
  }
}

//importData()

export default App
