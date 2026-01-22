var welcome_text = "<div style='margin:0; font-size:18px; width: 1000px; text-align:left; display:inline-block'><h2 style='text-align:center;'>Herzlich willkommen zur Studie!</h2>"+
	"<dl style='line-height:1.15; list-style-type: none; text-align: center; '><dd style='display: inline-block;'>Wir freuen uns, dass Sie an unserer Studie teilnehmen möchten.<br>Bevor Sie fortfahren, lesen Sie bitte die folgenden Informationen aufmerksam durch.</dd>"+
	"<br><br><dt style ='background-color: darkgrey;'><strong>Teilnahmekriterien</strong></dt>"+
	"<dd style='display: inline-block;'>Bitte beachten Sie, dass Sie die folgenden Kriterien erfüllen müssen, um an der Studie teilnehmen zu können:</dd>" +
	"<dd style='display: inline-block;'>1. Sie müssen zwischen 18 und 40 Jahren alt sein.<br>2. Sie müssen die deutsche Sprache auf Muttersprachniveau beherrschen.<br>3. Sollten Sie eine Sehschwäche haben, müssen Sie während der Studie Brille bzw. Kontaktlinsen tragen.</dd>"+
	"<br><br><dt style ='background-color: darkgrey;'><strong>Technische Voraussetzungen</strong></dt>"+
	"<dd style='display: inline-block;'>Bitte beachten Sie, dass Sie die folgenden technischen Voraussetzungen erfüllen müssen, um an der Studie teilnehmen zu können:</dd>" +
	"<dd style='display: inline-block;'>1. <strong>Laptop oder Computer</strong> mit Bildschirmdiagonale von mindestens 14 Zoll (min. 17 cm * 31 cm). Tablets und Smartphones sind <strong>nicht</strong> geeignet.<br>2. Studie sollte wenn möglich in <strong>Firefox</strong> oder <strong>Google Chrome</strong> geöffnet werden.<br> 3. Eine Teilnahme unter Safari ist aus technischen Gründen zur Zeit nicht möglich.</dd>"+
	"</dl></div>"+"<div style='font-size:18px;line-height:1.15;'><p style='margin:0px; font-size:18px;'><i>Wenn Sie alle Teilnahmekriterien und technischen Voraussetzungen erfüllen, klicken Sie bitte auf 'Weiter',<br>um an dieser Studie teilzunehmen. Wenn eins oder mehrere der Teilnahmekriterien nicht auf Sie zutreffen<br>oder Sie die technischen Voraussetzungen nicht erfüllen können, klicken Sie bitte auf 'Abbrechen'.</i></p></div>";
;

var fullscreen_text = "<p style='font-size:18px;'>Zur besseren Darstellung der Studie wird diese im Vollbild-Modus durchgeführt.<br>Wenn Sie unten auf die Schaltfläche <strong>'Weiter'</strong> klicken, wird der Vollbild-Modus gestartet.<br>Der Vollbild-Modus wird nach Abschluss der Studie automatisch wieder beendet.<br>Sollten Sie die Studie vorzeitig abbrechen wollen, drücken Sie die Taste 'Esc' auf Ihrer Tastatur.<br>Bitte beachten Sie, dass eine Teilnahme an der Studie dann nicht mehr möglich ist.</p>";

var resize_text = "<p style='font-size:18px;'>Um die Inhalte, die Sie gleich sehen werden, in der für Ihren Bildschirm richtigen Größe darstellen zu können,<br>bitten wir Sie, sich nun eine Bankkarte zur Hand zu nehmen. Halten Sie die Karte direkt vor das blaue Feld<br>und ziehen Sie die rechte untere Ecke des Feldes so weit, dass es der Größe Ihrer Bankkarte entspricht.</p>"+
	"<p style='margin-top: 30px; font-size:18px'><br>Wenn Sie die Größe des blauen Feldes passend eingestellt haben, klicken Sie bitte unten auf die Schaltfläche 'Weiter'.</p>"
;

// noch einfügen von VPM und Studienleitung sowie Aufklärer und downlaod
var consent_information = "<div style='margin:0; font-size:18px; width: 1000px; text-align:left; display:inline-block'><h2 style='text-align:center;'>Studieninformationen und -einwilligung</h2>" +
    "<dl style='line-height:1.15; list-style-type: none; text-align: center; '><dd style='display: inline-block;'><strong>Wichtig:</strong> Bitte laden Sie die <a href='Information_und_Einwilligung_VSSOR.pdf' download>Informationen zur Studienteilnahme</a> herunter und lesen Sie diese aufmerksam durch.<br><br><dt><strong>Studieninformation</strong></dt><dd style='display: inline-block;'>In dieser Studie untersuchen wir die Informationsverarbeitung beim Kategorisieren verschiedener Umgebungen (Szenen). Sie werden dazu wiederholt verschieden bearbeitete Bilder sehen und sollen angeben, zu welcher der vorgegebenen Kategorien die Szene gehört.</dd>"+
    "<br><br><dt style ='background-color: darkgrey;'><strong>Persönlicher Nutzen</strong></dt>"+
    "<dd style='display: inline-block;'>Psychologie-Studierende können für ihre Teilnahme an der Studie (x) Versuchspersonenminuten erhalten. Bitte notieren Sie sich dazu den Code, den Sie gleich erstellen werden. Nach Abschluss der Studie erhalten Sie die VPM automatisch über Sona. Klicken Sie dazu bitte auf den Link am Ende der Studie. Sollte die Anerkennung der VPM über Sona nicht funktionieren, kontaktieren Sie bitte unter Angabe Ihres Codes Sandro Wiesmann, wiesmann@psych.uni-frankfurt.de</dd>"+
    "<br><br><dt style ='background-color: darkgrey;'><strong>Freiwilligkeit</strong></dt>"+
    "<dd style='display: inline-block;'>Die Teilnahme an dieser Studie ist freiwillig. Sie können Ihre Teilnahme jederzeit ohne Angabe von Gründen beenden. Sollten Sie Ihre Teilnahme vor Abschluss der Aufgabe abbrechen wollen, drücken Sie die Taste 'Esc' auf Ihrer Tastatur. Sie können danach das Browser-Fenster schließen, ohne dass Ihre Angaben gespeichert werden. Bitte beachten Sie, dass in diesem Fall aus technischen Gründen keine Teilvergütung (Versuchspersonenminuten) für Ihre Teilnahme vergeben werden kann.</dd>"+
    "<br><br><dt style ='background-color: darkgrey;'><strong>Datensicherung und Datenschutz</strong></dt>"+
    "<dd style='display: inline-block;'>Im Zuge dieser Studie werden <i>keinerlei</i> personenidentifizierende Daten (wie etwa Namen, Kontaktdaten oder IP-Adressen) erhoben. Die für die Studie relevanten Daten (z. B. Ihre Kategorisierung der im Folgenden präsentierten Bilder) werden in pseudonymisierter Form abgespeichert. Die Zuordnung der Pseudonyme (Zahlencodes) zu den Datensätzen ist nur der Studienleitung bekannt und wird nach 5 Jahren automatisch gelöscht. Dann sind sämtliche Daten vollständig anonymisiert. Die Daten werden auf einem lokalen Server der Goethe-Universität Frankfurt in einem Verzeichnis gespeichert, das ausschließlich den Studienmitarbeiter*innen zugänglich ist. </dd>"+
    "<br><br><dt style ='background-color: darkgrey;'><strong>Studienleitung</strong></dt>"+
    "<dd style='display: inline-block;'> (x) </dd>"
    "<br><br><dt style ='background-color: darkgrey;'><strong>Einwilligungserklärung</strong></dt>"+
    "<dd>Ich bin schriftlich (online) über die Studie und ihren Ablauf aufgeklärt worden. Ich willige ein, an der Studie teilzunehmen. Sofern ich Fragen zu dieser vorgesehenen Studie hatte, wurden sie von (x) vollständig und zu meiner Zufriedenheit beantwortet.</dd>"+
    "<dd>Mit der beschriebenen Erhebung und Verarbeitung der Daten bin ich einverstanden. Die Aufzeichnung und Auswertung dieser Daten erfolgt pseudonymisiert in der Abteilung Allgemeine Psychologie I, Goethe Universtität, Frankfurt, unter Verwendung einer Nummer und ohne Angabe meines Namens. Es existiert eine Kodierliste auf Papier, die meinen Namen mit dieser Nummer verbindet. Diese Kodierliste ist nur den Versuchsleitern und dem Projektleiter zugänglich, das heißt, nur diese Personen können die erhobenen Daten mit meinem Namen in Verbindung bringen. Nach Abschluss der Datenauswertung, spätestens nach dem Ablauf von 5 Jahren, wird die Kodierliste gelöscht. Meine Daten sind dann anonymisiert. Damit ist es niemandem mehr möglich, die erhobenen Daten mit meinem Namen in Verbindung zu bringen. </dd>"+
    "<dd>Ich bin informiert, dass ich mein Einverständnis zur Aufbewahrung bzw. Speicherung dieser Daten widerrufen kann, ohne dass mir daraus Nachteile entstehen. Ich kann jederzeit eine Löschung all meiner Daten verlangen. Wenn allerdings die Kodierliste bereits gelöscht ist, kann mein Datensatz nicht mehr identifiziert und also auch nicht mehr gelöscht werden. Meine Daten sind dann anonymisiert. </dd>"+
    "<dd>Ich bin einverstanden, dass meine vollständig anonymisierten Daten zu Forschungszwecken weiterverwendet werden können. Dazu werden sie mindestens 10 Jahre nach Datenauswertung, bzw. mindestens 10 Jahre nach Erscheinen einer Publikation zu dieser Studie aufbewahrt und möglicherweise über eine Internet-Datenbank öffentlich zugänglich gemacht. Ich erkläre mich damit einverstanden, dass die Messdaten im Fall einer Zusammenarbeit der Arbeitsgruppe mit anderen Forschergruppen an diese in anonymisierter Form übermittelt werden dürfen.</dd>"+
    "<dd>Die Einverständniserklärung für die Studie ist freiwillig. Ich kann diese Erklärung jederzeit widerrufen. Im Falle einer Ablehnung oder eines Rücktritts besteht kein Anspruch auf eine Teilvergütung der bis dahin erbrachten Teilnahmezeit. Ich hatte genügend Zeit für eine Entscheidung und erkläre mich hiermit bereit an der o.g. Studie teilzunehmen. </dd>"+
    "<dd>Eine Ausfertigung der <a href='Information_und_Einwilligung_VSSOR.pdf' download>Informationen zur Studienteilnahme</a> habe ich erhalten.<br><br></dd>"+
    "</dl></div>"+"<div style='font-size:18px;line-height:1.15;'><p style='margin:0px; font-size:18px;'><i>Wenn Sie mit den hier und in den <a href='Information_und_Einwilligung_VSSOR.pdf' download>Informationen zur Studienteilnahme</a> beschriebenen Bedingungen<br>der Teilnahme einverstanden sind, klicken Sie bitte auf 'Einverstanden', um an dieser Studie teilzunehmen.<br>Wenn Sie nicht einverstanden sind, klicken Sie bitte auf 'Nicht einverstanden', um die Studie abzubrechen.<br><br></i></p></div>"
;

var instruction_pre = "<p style='font-size:16px;'><b>Anleitung</b><br></p>" +
    "<p style= 'font-size: 14px; line-height:1.15;'>" +
    "In dieser Studie werden Sie Szenen von verschiedenen Umgebungen sehen.<br> Ihre Aufgabe ist es, die jeweilige Umgebung zu erkennen und zu benennen. <br></p>" +
    "<p style='font-size:14px;line-height:1.15;'>" +
    "In jedem Durchgang erscheint zunächst ein Kreuz in der Mitte des Bildschirms, welches Sie bitte fixieren.<br>" +
    "Anschließend erscheint ein zufällig ausgewähltes Bild einer Umgebung, die sie kategorisieren sollen.<br>" +
    "Darauf hin werden sie gebeten, zu bewerten, wie Sicher sie sich sind, die Umgebung richtig erkannt zu haben.<br>(1 = sehr sicher bis 6 = sehr unsicher)<br>" +
    "Sie werden gebeten, zu notieren, woran Sie denken erkannt zu haben, um was für eine Umgebung es sich handelt.<br>" +
    "Zuletzt werden Sie noch gebeten, zu bewerten, wie sicher Sie sich sind, die Umgebung an den von Ihnen notierten Anhaltspunkten erkannt zu haben.<br>(1 = sehr sicher bis 6 = sehr unsicher)<br></p>" +
    "<p style='font-size:14px;line-height:1.15;'>Bitte drücken Sie die Leertaste, wenn Sie mit den Übungsdurchgängen beginnen wollen.</p>"
;

var instruction = "<p style='font-size:16px;'><b>Anleitung</b><br></p>" +
    "<p style= 'font-size: 14px; line-height:1.15;'>" +
    "In dieser Studie werden Sie Szenen von verschiedenen Umgebungen sehen.<br> Ihre Aufgabe ist es, die jeweilige Umgebung zu erkennen und zu benennen. <br></p>" +
    "<p style='font-size:14px;line-height:1.15;'>" +
    "In jedem Durchgang erscheint zunächst ein Kreuz in der Mitte des Bildschirms, welches Sie bitte fixieren.<br>" +
    "Anschließend erscheint ein zufällig ausgewähltes Bild einer Umgebung, die sie kategorisieren sollen.<br>" +
    "Darauf hin werden sie gebeten, zu bewerten, wie Sicher sie sich sind, die Umgebung richtig erkannt zu haben.<br>(1 = sehr sicher bis 6 = sehr unsicher)<br>" +
    "Sie werden gebeten, zu notieren, woran Sie denken erkannt zu haben, um was für eine Umgebung es sich handelt.<br>" +
    "Zuletzt werden Sie noch gebeten, zu bewerten, wie sicher Sie sich sind,<br>die Umgebung an den von Ihnen notierten Anhaltspunkten erkannt zu haben.<br>(1 = sehr sicher bis 6 = sehr unsicher)<br></p>" +
    "<p style='font-size:14px;line-height:1.15;'>Bitte drücken Sie die Leertaste, wenn Sie beginnen wollen.</p>"
;

var confidence_sd_text = '<div style="font-size:18px;">Wie sicher sind Sie sich, dass Sie die Umgebung richtig erkannt haben?<br><br>1 - sehr sicher\xa0\xa0\xa0\xa02 - sicher\xa0\xa0\xa0\xa03 - eher sicher\xa0\xa0\xa0\xa04 - eher unsicher\xa0\xa0\xa0\xa05 - unsicher\xa0\xa0\xa0\xa06 - sehr unsicher</div>';

var confidence_r_text = '<div style="font-size:18px;">Wie sicher sind Sie sich, die Umgebung anhand der von Ihnen genannten Anhaltspunkten erkannt zu haben?<br><br>1 - sehr sicher\xa0\xa0\xa0\xa02 - sicher\xa0\xa0\xa0\xa03 - eher sicher\xa0\xa0\xa0\xa04 - eher unsicher\xa0\xa0\xa0\xa05 - unsicher\xa0\xa0\xa0\xa06 - sehr unsicher</div>';