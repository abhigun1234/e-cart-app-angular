import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustumerService } from '../custumer.service';

@Component({
  selector: 'app-custumer',
  templateUrl: './custumer.component.html',
  styleUrls: ['./custumer.component.css']
})
export class CustumerComponent implements OnInit {
  constructor(private router :Router,private service:CustumerService){


  }
  custumers = [{ "id": 1, "first_name": "Florida", "last_name": "Bowerbank", "email": "fbowerbank0@behance.net" },
  { "id": 2, "first_name": "Ramsey", "last_name": "Thurlborn", "email": "rthurlborn1@icq.com" },
  { "id": 3, "first_name": "Ernst", "last_name": "Broadley", "email": "ebroadley2@furl.net" },
  { "id": 4, "first_name": "Raymund", "last_name": "Spohrmann", "email": "rspohrmann3@usnews.com" },
  { "id": 5, "first_name": "Jo ann", "last_name": "Zannotelli", "email": "jzannotelli4@mapy.cz" },
  { "id": 6, "first_name": "Freddi", "last_name": "Record", "email": "frecord5@facebook.com" },
  { "id": 7, "first_name": "Georgina", "last_name": "Marzele", "email": "gmarzele6@irs.gov" },
  { "id": 8, "first_name": "Garth", "last_name": "Petegre", "email": "gpetegre7@jigsy.com" },
  { "id": 9, "first_name": "Nicky", "last_name": "MacTrustrie", "email": "nmactrustrie8@nsw.gov.au" },
  { "id": 10, "first_name": "Alexandre", "last_name": "Twort", "email": "atwort9@opera.com" },
  { "id": 11, "first_name": "Rafa", "last_name": "Marson", "email": "rmarsona@kickstarter.com" },
  { "id": 12, "first_name": "Shandee", "last_name": "Essel", "email": "sesselb@accuweather.com" },
  { "id": 13, "first_name": "Candie", "last_name": "MacIntosh", "email": "cmacintoshc@sakura.ne.jp" },
  { "id": 14, "first_name": "Kelley", "last_name": "Humpherston", "email": "khumpherstond@forbes.com" },
  { "id": 15, "first_name": "Hamid", "last_name": "Weir", "email": "hweire@prweb.com" },
  { "id": 16, "first_name": "Valeria", "last_name": "McGuigan", "email": "vmcguiganf@tmall.com" },
  { "id": 17, "first_name": "Annamaria", "last_name": "Dmytryk", "email": "admytrykg@mashable.com" },
  { "id": 18, "first_name": "Ilse", "last_name": "Keaves", "email": "ikeavesh@ask.com" },
  { "id": 19, "first_name": "Sean", "last_name": "Godart", "email": "sgodarti@marriott.com" },
  { "id": 20, "first_name": "Brody", "last_name": "Coldbreath", "email": "bcoldbreathj@yandex.ru" },
  { "id": 21, "first_name": "Peterus", "last_name": "Gabbat", "email": "pgabbatk@cisco.com" },
  { "id": 22, "first_name": "Jeramey", "last_name": "Hadye", "email": "jhadyel@wp.com" },
  { "id": 23, "first_name": "Eli", "last_name": "Chazelas", "email": "echazelasm@ameblo.jp" },
  { "id": 24, "first_name": "Felicle", "last_name": "Jellett", "email": "fjellettn@imageshack.us" },
  { "id": 25, "first_name": "Davey", "last_name": "Middleweek", "email": "dmiddleweeko@oaic.gov.au" },
  { "id": 26, "first_name": "Cristal", "last_name": "Hasnip", "email": "chasnipp@hatena.ne.jp" },
  { "id": 27, "first_name": "Jacqueline", "last_name": "Inns", "email": "jinnsq@bbc.co.uk" },
  { "id": 28, "first_name": "Lilllie", "last_name": "Lebond", "email": "llebondr@joomla.org" },
  { "id": 29, "first_name": "Noami", "last_name": "Hankard", "email": "nhankards@berkeley.edu" },
  { "id": 30, "first_name": "Rani", "last_name": "Kineton", "email": "rkinetont@europa.eu" },
  { "id": 31, "first_name": "Angelia", "last_name": "Gaishson", "email": "agaishsonu@earthlink.net" },
  { "id": 32, "first_name": "Alidia", "last_name": "Copas", "email": "acopasv@dropbox.com" },
  { "id": 33, "first_name": "Christye", "last_name": "Wavish", "email": "cwavishw@cdbaby.com" },
  { "id": 34, "first_name": "Kathleen", "last_name": "Munehay", "email": "kmunehayx@cbslocal.com" },
  { "id": 35, "first_name": "Barnabas", "last_name": "Dering", "email": "bderingy@dmoz.org" },
  { "id": 36, "first_name": "Tom", "last_name": "Lascelles", "email": "tlascellesz@cbslocal.com" },
  { "id": 37, "first_name": "Wadsworth", "last_name": "Artus", "email": "wartus10@fastcompany.com" },
  { "id": 38, "first_name": "Aloisia", "last_name": "Stoodale", "email": "astoodale11@rambler.ru" },
  { "id": 39, "first_name": "Virgie", "last_name": "Ratcliffe", "email": "vratcliffe12@ft.com" },
  { "id": 40, "first_name": "Fan", "last_name": "Dreus", "email": "fdreus13@123-reg.co.uk" },
  { "id": 41, "first_name": "Roanna", "last_name": "Adanet", "email": "radanet14@stumbleupon.com" },
  { "id": 42, "first_name": "Reggis", "last_name": "Sawtell", "email": "rsawtell15@noaa.gov" },
  { "id": 43, "first_name": "Robert", "last_name": "Bowstead", "email": "rbowstead16@samsung.com" },
  { "id": 44, "first_name": "Ebony", "last_name": "Byles", "email": "ebyles17@pen.io" },
  { "id": 45, "first_name": "Teador", "last_name": "Henke", "email": "thenke18@sitemeter.com" },
  { "id": 46, "first_name": "Adaline", "last_name": "Clear", "email": "aclear19@amazon.com" },
  { "id": 47, "first_name": "Ellette", "last_name": "Tombling", "email": "etombling1a@mtv.com" },
  { "id": 48, "first_name": "Timi", "last_name": "Moncaster", "email": "tmoncaster1b@blog.com" },
  { "id": 49, "first_name": "Halli", "last_name": "Strowan", "email": "hstrowan1c@walmart.com" },
  { "id": 50, "first_name": "Ardisj", "last_name": "Woolford", "email": "awoolford1d@msn.com" },
  { "id": 51, "first_name": "Korry", "last_name": "Kurten", "email": "kkurten1e@ustream.tv" },
  { "id": 52, "first_name": "Norrie", "last_name": "Morilla", "email": "nmorilla1f@pen.io" },
  { "id": 53, "first_name": "Roxanne", "last_name": "Wilmore", "email": "rwilmore1g@huffingtonpost.com" },
  { "id": 54, "first_name": "Connie", "last_name": "Vaulkhard", "email": "cvaulkhard1h@ucla.edu" },
  { "id": 55, "first_name": "Viviyan", "last_name": "Tabb", "email": "vtabb1i@army.mil" },
  { "id": 56, "first_name": "Chiquia", "last_name": "Scholl", "email": "cscholl1j@yale.edu" },
  { "id": 57, "first_name": "Andras", "last_name": "Napper", "email": "anapper1k@mapy.cz" },
  { "id": 58, "first_name": "Danila", "last_name": "Behrend", "email": "dbehrend1l@hibu.com" },
  { "id": 59, "first_name": "Shea", "last_name": "Ikringill", "email": "sikringill1m@amazonaws.com" },
  { "id": 60, "first_name": "Vincents", "last_name": "Gallehawk", "email": "vgallehawk1n@blog.com" },
  { "id": 61, "first_name": "Obidiah", "last_name": "Ciccarelli", "email": "ociccarelli1o@foxnews.com" },
  { "id": 62, "first_name": "Cointon", "last_name": "Dufton", "email": "cdufton1p@biglobe.ne.jp" },
  { "id": 63, "first_name": "Rex", "last_name": "Buttery", "email": "rbuttery1q@nifty.com" },
  { "id": 64, "first_name": "Floyd", "last_name": "Bossingham", "email": "fbossingham1r@kickstarter.com" },
  { "id": 65, "first_name": "Bethena", "last_name": "Allcoat", "email": "ballcoat1s@tripadvisor.com" },
  { "id": 66, "first_name": "Caitrin", "last_name": "Greasley", "email": "cgreasley1t@bloomberg.com" },
  { "id": 67, "first_name": "Carmita", "last_name": "Stabler", "email": "cstabler1u@tripod.com" },
  { "id": 68, "first_name": "Faina", "last_name": "Banaszkiewicz", "email": "fbanaszkiewicz1v@networkadvertising.org" },
  { "id": 69, "first_name": "Devin", "last_name": "Bussen", "email": "dbussen1w@zdnet.com" },
  { "id": 70, "first_name": "Collin", "last_name": "Dimsdale", "email": "cdimsdale1x@squarespace.com" },
  { "id": 71, "first_name": "Gardner", "last_name": "Manifould", "email": "gmanifould1y@deliciousdays.com" },
  { "id": 72, "first_name": "Alvin", "last_name": "Brookesbie", "email": "abrookesbie1z@cdc.gov" },
  { "id": 73, "first_name": "Mathilda", "last_name": "Charnick", "email": "mcharnick20@yellowpages.com" },
  { "id": 74, "first_name": "Annabal", "last_name": "Boobier", "email": "aboobier21@nymag.com" },
  { "id": 75, "first_name": "Glynda", "last_name": "Pidgeley", "email": "gpidgeley22@canalblog.com" },
  { "id": 76, "first_name": "Gianna", "last_name": "Turnbull", "email": "gturnbull23@homestead.com" },
  { "id": 77, "first_name": "Mallissa", "last_name": "Whatham", "email": "mwhatham24@wunderground.com" },
  { "id": 78, "first_name": "Abbot", "last_name": "Bertolaccini", "email": "abertolaccini25@biblegateway.com" },
  { "id": 79, "first_name": "Dwayne", "last_name": "Casado", "email": "dcasado26@skyrock.com" },
  { "id": 80, "first_name": "Helli", "last_name": "Marrington", "email": "hmarrington27@ow.ly" },
  { "id": 81, "first_name": "Debbi", "last_name": "Duhig", "email": "dduhig28@weebly.com" },
  { "id": 82, "first_name": "Nate", "last_name": "Cozens", "email": "ncozens29@kickstarter.com" },
  { "id": 83, "first_name": "Ahmed", "last_name": "Askey", "email": "aaskey2a@cbslocal.com" },
  { "id": 84, "first_name": "Revkah", "last_name": "Peagram", "email": "rpeagram2b@prlog.org" },
  { "id": 85, "first_name": "Darnall", "last_name": "Firpo", "email": "dfirpo2c@blogs.com" },
  { "id": 86, "first_name": "Silvio", "last_name": "Izhak", "email": "sizhak2d@sogou.com" },
  { "id": 87, "first_name": "Tasha", "last_name": "Ditt", "email": "tditt2e@xinhuanet.com" },
  { "id": 88, "first_name": "Corny", "last_name": "Thow", "email": "cthow2f@bigcartel.com" },
  { "id": 89, "first_name": "Phylis", "last_name": "Fenkel", "email": "pfenkel2g@elegantthemes.com" },
  { "id": 90, "first_name": "Minetta", "last_name": "Atte-Stone", "email": "mattestone2h@canalblog.com" },
  { "id": 91, "first_name": "Spike", "last_name": "Beeckx", "email": "sbeeckx2i@icq.com" },
  { "id": 92, "first_name": "Rhea", "last_name": "Kiss", "email": "rkiss2j@weebly.com" },
  { "id": 93, "first_name": "Alys", "last_name": "Toffoletto", "email": "atoffoletto2k@ow.ly" },
  { "id": 94, "first_name": "Boothe", "last_name": "Snelman", "email": "bsnelman2l@storify.com" },
  { "id": 95, "first_name": "Karine", "last_name": "Forrestall", "email": "kforrestall2m@businesswire.com" },
  { "id": 96, "first_name": "Micki", "last_name": "Nott", "email": "mnott2n@auda.org.au" },
  { "id": 97, "first_name": "Sharl", "last_name": "Hanway", "email": "shanway2o@washingtonpost.com" },
  { "id": 98, "first_name": "Adrea", "last_name": "Lorenzin", "email": "alorenzin2p@printfriendly.com" },
  { "id": 99, "first_name": "Whit", "last_name": "Riccardelli", "email": "wriccardelli2q@fastcompany.com" },
  { "id": 100, "first_name": "Cthrine", "last_name": "Hegel", "email": "chegel2r@cmu.edu" }]


  ngOnInit(): void {
  }
  onSelect(cust){
   this.router.navigate(['cust',cust.id])
   this.service.setCustData(cust)


  }

}
