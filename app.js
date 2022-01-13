"use strict";

// Change to false if you don't want a timer
const showTimer = false;

// Set timer countdown time here in minutes : seconds format
const time = 0 + ":" + 19;

// Add list of names here
const namesList = [
	"สมนึก จันทพรม",
            "ณัฐกร ปั้นสุข",
            "ฉัตรทอง มากทรัพย์",
            "เอกศิษฐ์ ศรศิลป์ธนาชัย",
            "สุรพันธ์ ตั้งธีระชัยสวัสดิ์",
            "ณรงค์ฤทธิ์ ปาตุ",
            "จิตพัต จันทศิริ",
            "สิทธิชัย ประภาทรง",
            "ไวยวุธ เกาทัณฑ์",
            "พรหมมินทร์ เฉียงเหนือ",
            "สามารถ จันทร์อินทร์",
            "บุญลือ ฉลาดแพทย์",
            "พิมล วงษาลังกา",
            "สุพจน์ ทองแท้",
            "สมศักดิ์ จิตทัย",
            "สุทิติ ผ่องสุภัค",
            "รังสรรค์ ลามี",
            "รณรงค์ วิเศษสุวรรณ์",
            "วรานนท์ ตูมหอม",
            "พรรณเชษฐ พงษ์ดี",
            "กิตติชัย เณรมา",
            "กิตติศักดิ์ กาญจนวงษา",
            "สุทธิพงษ์ กุลด้วง",
            "อำนาจ พิมพ์ใหม่",
            "พนมเทียน ผลวิลัย",
            "จิตรกร ชัยสายันต์",
            "ภัทรพล ไชยวรรณ",
            "นรา แกล้วกสิกิจ",
            "วิทยา กุลผึ้ง",
            "ณรงค์ศักดิ์ ถึงฝั่ง",
            "อิทธิพล นฤตย์ศาสตร์",
            "ฉัตรชัย สุขเจริญ",
            "ปรีชนันท์ แก้วน้อย",
            "ขัตติยะ ใจห้าว",
            "อภิสิทธิ์ สุขรอด",
            "ชนินทร์ ณ นคร",
            "รนุพงศ์ แก้วบุตร",
            "ณัฐพล บินมาหะมะ",
            "ประยูร สร้อยอุดม",
            "มนูญ ขนันแข็ง",
            "จักรพงศ์ ศรียศราช",
            "กันต์ภัสสรณ์ ฟักเถาว์",
            "Rajasak Boonkua",
            "Udomkarn Sappharn",
            "Charoen Sangsuk",
            "จิรศักดิ์ สุขสุคนธ์",
            "ณรงค์ เหลื่องใหม่เอี่ยม",
            "nutthaphan suvannachote",
            "Thos Thos",
            "thanawat pimgaew",
            "ธวัชชัย โกสิลา",
            "Theerakat Thongkam",
            "ธีรศักดิ์ หนูสี",
            "นรินทร์ เลิศบารมีวงศ์",
            "บัญชา สามัญ",
            "Yuth Pas",
            "ปลวัชร รัตนานิคม",
            "Pichai Wanjanturk",
            "วิสัน สนชาวไพร",
            "Wuttisak Jongkrijuk",
            "Suphakorn Suttipibal",
            "สุชาติ เจริญสิงห์",
            "Sumit Buapun",
            "นายไพบูลย์ ขวัญเกลี้ยง",
            "ชนพล ใจรักษ์",
            "นัฐพล ยศพล",
            "สุทธิศักดิ์ โชว์วิวัฒนา",
            "วิทยา สะและน้อย",
            "นิรันดร์ เทียนถาวร",
            "ทวีศักดิ์ ขวัญเมือง",
            "มงคล ลานเลี้ยงชีพ",
            "อัศวินินท์ ทับสมุทร",
            "เจนณรงค์ เต็มรัตน์",
            "จักรกฤษ ฤทธิ์กำลัง",
            "ชัยพรหม ศรีโพธิ์ทา",
            "สมชาย สุขเพียร",
            "พนม สินสมบูรณ์",
            "ศิรพงษ์ รักษา",
            "ธีระวัฒน์ นาหิรัญ",
            "วชิระ ดวงดารา",
            "ประสงค์ เงินสมบัติ",
            "ธวัฒน์ บางใบ",
            "วรวุฒิ สร้อยสาย",
            "อดิศร นาวาเดช",
            "มานะ เลิศปัญญาธิกุล",
            "อำพล ศรีเนาว์",
            "พฤหัส ห้วยหงษ์ทอง",
            "ใจเพชร คล้ายกิ่ง",
            "ภิเศก เอี่ยมมี",
            "จิรวัฒน์ บัวระบัติ",
            "สัมฤทธิ์ เจาะจง",
            "อภิชาติ โลกเลื่อง",
            "สุพณิช แก้วดวงเล็ก",
            "ศุภชัย อาภาสัจจนันท์",
            "สกัด รัตนชีวัฒน์",
            "อนุรัตน์ บุษราคำ",
            "เขมจิรา จักรบุตร",
            "สิทธฺิศักดิ์ ศรีมาลา",
            "นิวัฒน์พงษ์ สวัสดิ์สกุลพงษ์"
];

// Default variables
let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');
const timesUp = document.getElementById('timesUp');
const timerWrapper = document.getElementById('timerWrapper');
const timer = document.getElementById('timer');

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	this.style.display = "none";
	stopButton.style.display = "block";
	intervalHandle = setInterval(function () {
		headerNames.textContent = namesList[i++ % namesList.length];
	}, 50);
	if (showTimer===true) {
		timerWrapper.classList.remove('visible');
	}
});
stopButton.addEventListener('click', function() {
	this.style.display = "none";
	startButton.style.display = "block";
	clearInterval(intervalHandle);
	timer.innerHTML = time;
	if (showTimer===true) {
		timerWrapper.classList.add('visible');
	}
	startTimer();
});

// Allow use of spacebar to start/stop name shuffle
document.body.onkeyup = function(e) {
	if (e.keyCode == 32) {
		if (x%2===0) {
			startButton.style.display = "none";
			stopButton.style.display = "block";
			intervalHandle = setInterval(function () {
				headerNames.textContent = namesList[i++ % namesList.length];
			}, 50);
			if (showTimer===true) {
				timerWrapper.classList.remove('visible');
			}
		} else {
			startButton.style.display = "block";
			stopButton.style.display = "none";
			clearInterval(intervalHandle);
			timer.innerHTML = time;
			if (showTimer===true) {
				timerWrapper.classList.add('visible');
			}
			startTimer();
		}
		x++; 
	}
} 





