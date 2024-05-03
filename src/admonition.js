///Dad:Red Mark
// Dad要素の作成
var Dad = document.createElement('div');
Dad.id = 'Dad';

// DadTitle要素の作成
var DadTitle = document.createElement('p');
DadTitle.classList.add('DadTitle');
// DadDesc要素の作成
var DadDesc = document.createElement('p');
DadDesc.classList.add('DadDesc');


// Dad要素にDadTitle要素を追加
Dad.appendChild(DadTitle);
// Dad要素にDadDesc要素を追加
Dad.appendChild(DadDesc);

document.body.appendChild(Dad);


///Wad:Yellow Mark

var Wad = document.createElement('div');
Wad.id = 'Wad';

var WadTitle = document.createElement('p');
WadTitle.classList.add('WadTitle');

var WadDesc = document.createElement('p');
WadDesc.classList.add('WadDesc');

Wad.appendChild(WadTitle);
Wad.appendChild(WadDesc);

document.body.appendChild(Wad);

//Tad:Green Mark

var Tad = document.createElement('div');
Tad.id = 'Tad';

var TadTitle = document.createElement('p');
TadTitle.appendChild.arguments('TadTitle');

var TadDesc = document.createElement('p');
TadDesc.appendChild.arguments('TadDesc');

Tad.appendChild(TadTitle);
Tad.appendChild(TadDesc);

document.body.appendChild(Tad);
