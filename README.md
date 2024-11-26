Simon Says
===
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci
## Logica
- Creo innanzitutto la struttura html con un div per il countdown, una row con 5 colonne che dovranno contenere i numeri random generati, un'altra row (form) inizialmente nascosta con 5 colonne contenenti altrettanti input, un button per dare la conferma dei numeri ricordati dal giocatore e un p che compare per indicare la quantità di numeri indovinati.
- Nel file js richiamo poi i miei dati.
- Creo due array da popolare, uno con i numeri random creati dal sistema e uno con i numeri del giocatore. Dovranno poi essere paragonati e aggiornato un counter nel caso ci fossero corrispondenze.
- Creo la mia function per il countdown e per la creazione dei numeri random.
- Creo poi la funzione per il confronto dei due array e per il funzionamento del counter.