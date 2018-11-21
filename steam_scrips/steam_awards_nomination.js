ShowBlockingWaitDialog("Подождите 5 секунд!", "");
var Nominations = [
	578080,
	342180,
	505170,
	21416,
	268910,
	218620,
	612880,
	244850
];
Nominations.forEach(function(Element, Index) {
	setTimeout(NominationPost, Index * 500, Element, Index + 1);
});
setTimeout(function() {
	document.location.href = "//store.steampowered.com/SteamAwardNominations/";
}, (Nominations.length + 3) * 500);

function NominationPost(AppId, CategoryId) {
	$J.post('//store.steampowered.com/steamawards/nominategame', {
		sessionid: g_sessionID,
		nominatedid: AppId,
		categoryid: CategoryId,
		source: 3,
	});
};
