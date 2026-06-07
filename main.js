const menus = [
  {
    shop: '김치찌개',
    name: '전통숙성 황실김치찜&찌개 고양점',
    mainMenu: '한그릇 [숙성삼겹] 황실김치찌개',
    img: 'img/1. 김치찌개.jpg',
    price: '13,900원',
    score_img: 'img/1. 김치찌개 평점.jpg',
    category: '한식',
  },
  {
    shop: '햄버거',
    name: '맥도날드 고양DT점',
    mainMenu: '맥스파이시 상하이버거 세트',
    img: 'img/2. 햄버거.jpg',
    price: '9,100원',
    score_img: 'img/2. 햄버거 평점.jpg',
    category: '양식',
  },
  {
    shop: '짜장면',
    name: '차이나하오치',
    mainMenu: '짜장면',
    img: 'img/3. 짜장면.jpg',
    price: '7,000원',
    score_img: 'img/3,4. 짜장, 짬뽕 평점.jpg',
    category: '중식',
  },
  {
    shop: '짬뽕',
    name: '차이나하오치',
    mainMenu: '차돌왕짬뽕',
    img: 'img/4. 짬뽕.jpg',
    price: '12,000원',
    score_img: 'img/3.4. 짜장, 짬뽕 평점.jpg',
    category: '중식',
  },
  {
    shop: '김밥',
    name: '김가네 벽제점',
    mainMenu: '김가네김밥',
    img: 'img/5. 김밥.jpg',
    price: '4,500원',
    score_img: 'img/5. 김밥 평점.jpg',
    category: '분식',
  },
  {
    shop: '마라탕',
    name: '황비홍마라탕 고양점',
    mainMenu: '내맘대로 마라탕',
    img: 'img/6. 마라탕.jpg',
    price: '13,500원',
    score_img: 'img/6. 마라탕 평점.jpg',
    category: '중식',
  },
  {
    shop: '치킨',
    name: 'BBQ 고양고골길점',
    mainMenu: '황금올리브치킨',
    img: 'img/7. 치킨.jpg',
    price: '25,000원',
    score_img: 'img/7. 치킨 평점.jpg',
    category: '한식',
  },
  {
    shop: '초밥',
    name: '육회왕자 연어공주 고양동점',
    mainMenu: '모듬초밥',
    img: 'img/8. 초밥.jpg',
    price: '15,900원',
    score_img: 'img/8. 초밥 평점.jpg',
    category: '일식',
  },
  {
    shop: '떡볶이',
    name: '배떡 고양동점',
    mainMenu: '로제 떡볶이',
    img: 'img/9. 떡볶이.jpg',
    price: '11,000원',
    score_img: 'img/9. 떡볶이 평점.jpg',
    category: '분식',
  },
  {
    shop: '국밥',
    name: '손큰할매순대국',
    mainMenu: '순대국',
    img: 'img/10. 순대국.jpg',
    price: '10,000원',
    score_img: 'img/10. 순대국 평점.jpg',
    category: '한식',
  },
  {
    shop: '도시락',
    name: '한솥도시락 고양푸른마을점',
    mainMenu: '치킨마요',
    img: 'img/11. 도시락.jpg',
    price: '4,700원',
    score_img: 'img/11. 도시락 평점.jpg',
    category: '한식',
  },
  {
    shop: '찜닭',
    name: '동궁 찜닭 고양점',
    mainMenu: '동궁 황금찜닭',
    img: 'img/12. 찜닭.jpg',
    price: '23,000원',
    score_img: 'img/12. 찜닭 평점.jpg',
    category: '한식',
  },
  {
    shop: '돈가스',
    name: '미소야 고양동점',
    mainMenu: '로스카츠',
    img: 'img/13. 돈가스.jpg',
    price: '11,000원',
    score_img: 'img/13. 돈가스 평점.jpg',
    category: '일식',
  },
  {
    shop: '죽',
    name: '본죽 고양점',
    mainMenu: '전복죽',
    img: 'img/14. 죽.jpg',
    price: '14,000원',
    score_img: 'img/14. 죽 평점.jpg',
    category: '한식',
  },
  {
    shop: '쌀국수',
    name: '누들홀릭쌀국수',
    mainMenu: '차돌양지쌀국수',
    img: 'img/15. 쌀국수.jpg',
    price: '9,000원',
    score_img: 'img/15. 쌀국수 평점.jpg',
    category: '양식',
  },
  {
    shop: '보쌈',
    name: '성수보쌈 대자본점',
    mainMenu: '보쌈정식 도시락',
    img: 'img/16. 보쌈.jpg',
    price: '13,000원',
    score_img: 'img/16. 보쌈 평점.jpg',
    category: '한식',
  },
  {
    shop: '파스타',
    name: '파스타일 파스타&필라프 고양동점',
    mainMenu: '까르보나라 파스타',
    img: 'img/17. 파스타.jpg',
    price: '11,900원',
    score_img: 'img/17. 파스타 평점.jpg',
    category: '양식',
  },
  {
    shop: '삼겹살',
    name: '쫄면주는삼겹본능by놀부 고양점',
    mainMenu: '구이삼겹',
    img: 'img/18. 삼겹살.jpg',
    price: '17,900원',
    score_img: 'img/18. 삼겹살 평점.jpg',
    category: '한식',
  },
  {
    shop: '덮밥',
    name: '핵밥 고양관산점',
    mainMenu: '연어덮밥',
    img: 'img/19. 덮밥.jpg',
    price: '15,900원',
    score_img: 'img/19. 덮밥 평점.jpg',
    category: '한식',
  },
  {
    shop: '냉면',
    name: '인생 냉면 고양동점',
    mainMenu: '물 비빔냉면',
    img: 'img/20. 냉면.jpg',
    price: '10,900원',
    score_img: 'img/20. 냉면 평점.jpg',
    category: '한식',
  },
  {
    shop: '밥버거',
    name: '봉구스밥버거 고양동점',
    mainMenu: '햄치즈 밥버거',
    img: 'img/21. 밥버거.jpg',
    price: '5,100원',
    score_img: 'img/21. 밥버거 평점.jpg',
    category: '분식',
  },
  {
    shop: '닭볶음탕',
    name: '계근상 고양점',
    mainMenu: '1인 순살 닭도리탕',
    img: 'img/22. 닭볶음탕.jpg',
    price: '13,000원',
    score_img: 'img/22. 닭볶음탕 평점.jpg',
    category: '한식',
  },
  {
    shop: '곱창',
    name: '동대문곱창',
    mainMenu: '야채곱창 2인분',
    img: 'img/23. 곱창.jpg',
    price: '26,000원',
    score_img: 'img/23. 곱창 평점.jpg',
    category: '한식',
  },
  {
    shop: '제육볶음',
    name: '고기듬뿍 국물두루치기&밥도둑 짜글이 덕양점',
    mainMenu: '고기듬뿍두루치기',
    img: 'img/24. 제육볶음.jpg',
    price: '15,900원',
    score_img: 'img/24. 제육볶음 평점.jpg',
    category: '한식',
  },
  {
    shop: '샐러드',
    name: '샐러드킹 다이어트 고양동점',
    mainMenu: '부채살 스테이크 샐러드플래터',
    img: 'img/25. 샐러드.jpg',
    price: '15,900원',
    score_img: 'img/25. 샐러드 평점.jpg',
    category: '양식',
  },
  {
    shop: '닭발',
    name: '닭발공작소 고양덕양점',
    mainMenu: '직화무뼈닭발',
    img: 'img/26. 닭발.jpg',
    price: '20,000원',
    score_img: 'img/26. 닭발 평점.jpg',
    category: '한식',
  },
  {
    shop: '칼국수',
    name: '소담',
    mainMenu: '바지락칼국수',
    img: 'img/27. 칼국수.jpg',
    price: '10,000원',
    score_img: 'img/27. 칼국수 평점.jpg',
    category: '한식',
  },
  {
    shop: '피자',
    name: '자가제빵 선명희피자 고양점',
    mainMenu: '내 맘대로 반반~한 피자',
    img: 'img/28. 피자.jpg',
    price: '21,000원',
    score_img: 'img/28. 피자 평점.jpg',
    category: '양식',
  },
  {
    shop: '카레',
    name: '카레세끼 매운숙성카페전문 고양덕양점',
    mainMenu: '돈까스 에그스크램블 카레',
    img: 'img/29. 카레.jpg',
    price: '14,900원',
    score_img: 'img/29. 카레 평점.jpg',
    category: '일식',
  },
  {
    shop: '토스트',
    name: '토스트굽는사람들',
    mainMenu: '햄치즈토스트',
    img: 'img/30. Toast.jpg',
    price: '4,100원',
    score_img: 'img/30. 토스트 평점.jpg',
    category: '분식',
  },
  {
    shop: '부대찌개',
    name: '땅스부대찌개 고양점',
    mainMenu: '오리지널 부대찌개 3인분',
    img: 'img/31. 부대찌개.jpg',
    price: '16,900원',
    score_img: 'img/31. 부대찌개 평점.jpg',
    category: '한식',
  },
  {
    shop: '오므라이스',
    name: '오늘은 오므라이스 고양점',
    mainMenu: '대왕소세지 오므라이스',
    img: 'img/32. 오므라이스.jpg',
    price: '15,000원',
    score_img: 'img/32. 오므라이스 평점.jpg',
    category: '한식',
  },
  {
    shop: '한식뷔페',
    name: '골목길식당(중부대학교 입구)',
    mainMenu: '1인',
    img: 'img/33. 한식뷔페.jpg',
    price: '8,800원',
    category: '한식',
  },
  {
    shop: '국수',
    name: '울엄마 맛국수(중부대학교 입구)',
    mainMenu: '비빔국수',
    img: 'img/34. 국수.jpg',
    price: '5,000원',
    category: '한식',
  },
  {
    shop: '학식',
    name: '중부대학교 식당',
    mainMenu: '한식, 돈가스',
    img: 'img/35. 학식.jpg',
    price: '6,000원~7,500원',
    category: '한식',
  },
  {
    shop: '브런치',
    name: '빅브레드 고양점',
    mainMenu: '빅사이즈 고기고기 파이+빵반찬 120G',
    img: 'img/36. 브런치.jpg',
    price: '7,800원',
    score_img: 'img/36. 브런치 평점.jpg',
    category: '양식',
  },
  {
    shop: '간장게장',
    name: '신밥도둑꽃게장 고양점',
    mainMenu: '꽃게1인 간장게장 정식 도시락',
    img: 'img/37. 간장게장.jpg',
    price: '19,500원',
    score_img: 'img/37. 간장게장 평점.jpg',
    category: '한식',
  },
  {
    shop: '볶음밥',
    name: '밥앤동 볶음밥&우동 고양점',
    mainMenu: '삼겹 김치볶음밥',
    img: 'img/38. 볶음밥.jpg',
    price: '11,900원',
    score_img: 'img/38. 볶음밥 평점.jpg',
    category: '한식',
  },
  {
    shop: '족발',
    name: '성수보쌈 대자본점',
    mainMenu: '족발정식 도시락',
    img: 'img/39. 족발.jpg',
    price: '13,000원',
    score_img: 'img/39. 족발 평점.jpg',
    category: '한식',
  },
  {
    shop: '콩나물불고기',
    name: '밥꼬콩불 고양내유점',
    mainMenu: '1인 매콤 콩불콩불',
    img: 'img/40. 콩나물불고기.jpg',
    price: '17,000원',
    score_img: 'img/40. 콩나물불고기 평점.jpg',
    category: '한식',
  },
  {
    shop: '만두',
    name: '미호만두',
    mainMenu: '김치만두, 고기만두',
    img: 'img/41. 만두.jpg',
    price: '6,500원',
    score_img: 'img/41. 만두 평점.jpg',
    category: '분식',
  },
  {
    shop: '꼬치',
    name: '꼬치의품격 고양푸른마을점',
    mainMenu: '소금 구이 닭꼬치',
    img: 'img/42. 꼬치.jpg',
    price: '4,500원',
    score_img: 'img/42. 꼬치 평점.jpg',
    category: '분식',
  },
  {
    shop: '쭈꾸미',
    name: '불났쭈 양념쭈꾸미&갑오징어 고양점',
    mainMenu: '1인 직화 쭈꾸미 세트',
    img: 'img/43. 쭈꾸미.jpg',
    price: '18,900원',
    score_img: 'img/43. 쭈꾸미 평점.jpg',
    category: '한식',
  },
  {
    shop: '회덮밥',
    name: '울돌목횟집',
    mainMenu: '회덮밥',
    img: 'img/44. 회덮밥.jpg',
    price: '13,000원',
    score_img: 'img/44. 회덮밥 평점.jpg',
    category: '일식',
  },
  {
    shop: '고등어조림',
    name: '명가잔치상',
    mainMenu: '고등어조림',
    img: 'img/45. 고등어조림.jpg',
    price: '14,000원',
    score_img: 'img/45. 고등어조림 평점.jpg',
    category: '한식',
  },
  {
    shop: '갈비탕',
    name: '한우존',
    mainMenu: '왕갈비탕',
    img: 'img/46. 갈비탕.jpg',
    price: '15,000원',
    score_img: 'img/46. 갈비탕 평점.jpg',
    category: '한식',
  },
  {
    shop: '김치찜',
    name: '장터김치찜 고양관산점',
    mainMenu: '삼겹 김치찜',
    img: 'img/47. 김치찜.jpg',
    price: '23,900원',
    score_img: 'img/47. 김치찜 평점.jpg',
    category: '한식',
  },
  {
    shop: '탕수육',
    name: '1키로탕수육 고양관산점',
    mainMenu: '1~2인용 탕수육',
    img: 'img/48. 탕수육.jpg',
    price: '14,900원',
    score_img: 'img/48. 탕수육 평점.jpg',
    category: '중식',
  },
  {
    shop: '곱도리탕',
    name: '무대포주막촌',
    mainMenu: '1인 한우대창 곱도리탕',
    img: 'img/49. 곱도리탕.jpg',
    price: '20,000원',
    score_img: 'img/49. 곱도리탕 평점.jpg',
    category: '한식',
  },
  {
    shop: '육회비빔밥',
    name: '육회집',
    mainMenu: '한우 육회비빔밥',
    img: 'img/50. 육회비빔밥.jpg',
    price: '13,000원',
    score_img: 'img/50. 육회비빔밥 평점.jpg',
    category: '일식',
  },
]

let selectedCategory = '전체'

let ladderBridges = []
let globalAssignments = []
let globalNames = []
let isLadderPlaying = false

function showSection(sectionType) {
  const recommendSec = document.getElementById('recommend-section')
  const dutchSec = document.getElementById('dutch-section')
  if (!recommendSec || !dutchSec) return

  if (sectionType === 'recommend') {
    recommendSec.classList.remove('hidden')
    dutchSec.classList.add('hidden')
  } else if (sectionType === 'dutch') {
    recommendSec.classList.add('hidden')
    dutchSec.classList.remove('hidden')
  }
}

function selectCategory(category, element) {
  selectedCategory = category

  document.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.style.backgroundColor = 'white'
    btn.style.color = '#333'
    btn.style.borderColor = '#ccc'
  })

  element.style.backgroundColor = '#a90120'
  element.style.color = 'white'
  element.style.borderColor = '#a90120'
}

function recommendMenu() {
  const filteredMenus =
    selectedCategory === '전체'
      ? menus
      : menus.filter((m) => m.category === selectedCategory)

  if (filteredMenus.length === 0) {
    alert(`${selectedCategory} 카테고리에 해당하는 메뉴가 없습니다.`)
    return
  }

  const randomIndex = Math.floor(Math.random() * filteredMenus.length)
  const menu = filteredMenus[randomIndex]
  const card = document.getElementById('result-card')
  if (!card) return

  const scoreImgTag = menu.score_img
    ? `<img src="${menu.score_img}" alt="평점">`
    : ''
  card.innerHTML = `
    <img src="${menu.img}" alt="${menu.name}">
    <h2>${menu.shop}</h2>
    <h3>${menu.name}</h3>
    <p>${menu.mainMenu}</p>
    <p>${menu.price}</p>
    ${scoreImgTag}
  `
  card.classList.remove('hidden')
  card.classList.add('show')
}

function generateNameInputs() {
  const peopleCount = parseInt(document.getElementById('total-people').value)
  const container = document.getElementById('name-inputs-container')
  if (!container) return
  container.innerHTML = ''

  if (isNaN(peopleCount) || peopleCount < 2) return
  const maxPeople = Math.min(peopleCount, 10)

  for (let i = 0; i < maxPeople; i++) {
    const inputWrapper = document.createElement('div')
    inputWrapper.style.margin = '0.5rem 0'
    inputWrapper.innerHTML = `
      <input type="text" class="participant-name" placeholder="참여자 ${i + 1} 이름" style="padding:0.4rem; width:180px; border:1px solid #ccc; border-radius:4px;" />
    `
    container.appendChild(inputWrapper)
  }
}

function startLadderGame() {
  const totalPrice = parseInt(document.getElementById('total-price').value)
  const peopleCount = parseInt(document.getElementById('total-people').value)
  const nameInputs = document.querySelectorAll('.participant-name')

  if (!totalPrice || !peopleCount || peopleCount < 2) {
    alert('올바른 금액과 2명 이상의 인원수를 입력해주세요.')
    return
  }

  isLadderPlaying = false
  globalNames = []
  for (let i = 0; i < peopleCount; i++) {
    const nameValue = nameInputs[i] && nameInputs[i].value.trim()
    globalNames.push(nameValue || `참여자 ${i + 1}`)
  }

  const gameContainer = document.getElementById('ladder-game-container')
  const linesContainer = document.getElementById('ladder-lines-container')
  const resultCard = document.getElementById('dutch-result')

  gameContainer.classList.remove('hidden')
  resultCard.classList.add('hidden')
  linesContainer.innerHTML = ''

  globalAssignments = Array(peopleCount).fill(0)

  const luckyGuyIdx = Math.floor(Math.random() * peopleCount)

  let remainingPayersCount = peopleCount - 1
  let remainingPrice = totalPrice
  let payerIndices = []

  for (let i = 0; i < peopleCount; i++) {
    if (i !== luckyGuyIdx) payerIndices.push(i)
  }

  for (let i = 0; i < payerIndices.length - 1; i++) {
    let currentPayerIdx = payerIndices[i]
    let avgShare = remainingPrice / (remainingPayersCount - i)
    let maxShare = Math.min(
      remainingPrice - 100 * (remainingPayersCount - i - 1),
      avgShare * 1.6,
    )
    let minShare = 100

    let share = Math.floor(Math.random() * (maxShare - minShare + 1)) + minShare
    share = Math.round(share / 100) * 100

    globalAssignments[currentPayerIdx] = share
    remainingPrice -= share
  }
  globalAssignments[payerIndices[payerIndices.length - 1]] = remainingPrice

  ladderBridges = []
  const colWidthPercent = 100 / peopleCount

  for (let i = 0; i < peopleCount; i++) {
    const verticalLine = document.createElement('div')
    verticalLine.classList.add('ladder-vertical-line')
    verticalLine.setAttribute('data-index', i)

    verticalLine.style.position = 'absolute'
    verticalLine.style.left = `${i * colWidthPercent + colWidthPercent / 2}%`
    verticalLine.style.height = '100%'
    verticalLine.style.transform = 'translateX(-50%)'

    const nameButton = document.createElement('button')
    nameButton.classList.add('ladder-name-btn')
    nameButton.innerText = globalNames[i]
    nameButton.onclick = () => playLadderMotion(i)
    verticalLine.appendChild(nameButton)

    const priceLabel = document.createElement('div')
    priceLabel.classList.add('ladder-price-label')
    const priceVal = globalAssignments[i]
    priceLabel.innerText =
      priceVal === 0 ? '🎉 0원' : `${priceVal.toLocaleString()}원`
    verticalLine.appendChild(priceLabel)

    linesContainer.appendChild(verticalLine)
  }

  const totalRows = 6

  for (let r = 0; r < totalRows; r++) {
    const currentTopPercent = 20 + r * 11

    for (let i = 0; i < peopleCount - 1; i++) {
      const hasLeftBridge = ladderBridges.some(
        (b) => b.topPercent === currentTopPercent && b.fromColumn === i - 1,
      )

      if (!hasLeftBridge && Math.random() > 0.4) {
        ladderBridges.push({
          fromColumn: i,
          toColumn: i + 1,
          topPercent: currentTopPercent,
        })

        const bridgeLeft = i * colWidthPercent + colWidthPercent / 2
        const bridgeWidth = colWidthPercent

        const bridge = document.createElement('div')
        bridge.classList.add('ladder-horizontal-bridge')
        bridge.style.position = 'absolute'
        bridge.style.top = `${currentTopPercent}%`
        bridge.style.left = `${bridgeLeft}%`
        bridge.style.width = `${bridgeWidth}%`
        linesContainer.appendChild(bridge)
      }
    }
  }

  ladderBridges.sort((a, b) => a.topPercent - b.topPercent)
}

function playLadderMotion(startLineIdx) {
  if (isLadderPlaying) return
  isLadderPlaying = true

  const linesContainer = document.getElementById('ladder-lines-container')

  const oldBall = document.querySelector('.ladder-tracking-ball')
  if (oldBall) oldBall.remove()
  const oldTraces = document.querySelectorAll('.ladder-path-trace')
  oldTraces.forEach((t) => t.remove())

  const ball = document.createElement('div')
  ball.classList.add('ladder-tracking-ball')
  linesContainer.appendChild(ball)

  let currentColumn = startLineIdx

  let currentTop = 0

  let pathPoints = []
  pathPoints.push({ col: currentColumn, top: currentTop })

  let visitedBridges = new Set()

  while (currentTop < 100) {
    let nextBridge = null

    for (let bridge of ladderBridges) {
      if (bridge.topPercent > currentTop && !visitedBridges.has(bridge)) {
        if (
          bridge.fromColumn === currentColumn ||
          bridge.toColumn === currentColumn
        ) {
          nextBridge = bridge
          break
        }
      }
    }

    if (nextBridge) {
      pathPoints.push({ col: currentColumn, top: nextBridge.topPercent })
      visitedBridges.add(nextBridge)

      if (nextBridge.fromColumn === currentColumn) {
        currentColumn = nextBridge.toColumn
      } else {
        currentColumn = nextBridge.fromColumn
      }
      pathPoints.push({ col: currentColumn, top: nextBridge.topPercent })
      currentTop = nextBridge.topPercent
    } else {
      currentTop = 100
      pathPoints.push({ col: currentColumn, top: currentTop })
    }
  }

  let step = 0
  const columns = document.querySelectorAll('.ladder-vertical-line')
  const colWidthPercent = 100 / columns.length

  function applyNextPosition() {
    if (step >= pathPoints.length) {
      isLadderPlaying = false
      showFinalReceipt()
      return
    }

    const pt = pathPoints[step]
    const currentXPercent = pt.col * colWidthPercent + colWidthPercent / 2

    ball.style.left = `${currentXPercent}%`
    ball.style.top = `${pt.top}%`
    ball.style.transform = 'translate(-50%, -50%)'

    if (step > 0) {
      const prevPt = pathPoints[step - 1]
      const trace = document.createElement('div')
      trace.classList.add('ladder-path-trace')
      trace.style.position = 'absolute'

      if (prevPt.col === pt.col) {
        trace.style.width = '4px'
        trace.style.height = `${Math.abs(pt.top - prevPt.top)}%`
        trace.style.left = `${currentXPercent}%`
        trace.style.top = `${Math.min(prevPt.top, pt.top)}%`
        trace.style.transform = 'translateX(-50%)'
      } else {
        const fromXPercent = prevPt.col * colWidthPercent + colWidthPercent / 2
        trace.style.height = '4px'
        trace.style.width = `${Math.abs(currentXPercent - fromXPercent)}%`
        trace.style.left = `${Math.min(fromXPercent, currentXPercent)}%`
        trace.style.top = `${pt.top}%`
        trace.style.transform = 'translateY(-50%)'
      }
      linesContainer.appendChild(trace)
    }

    step++

    setTimeout(applyNextPosition, 420)
  }

  const firstPt = pathPoints[0]
  const startXPercent = firstPt.col * colWidthPercent + colWidthPercent / 2
  ball.style.left = `${startXPercent}%`
  ball.style.top = `${firstPt.top}%`
  ball.style.transform = 'translate(-50%, -50%)'

  step = 1
  setTimeout(applyNextPosition, 50)
}

function showFinalReceipt() {
  const resultCard = document.getElementById('dutch-result')
  if (!resultCard) return

  let resultHTML = `<h3 style="color:#a90120; border-bottom:2px dashed #eee; padding-bottom:0.5rem;">사다리 타기 결과</h3>`
  globalNames.forEach((name, idx) => {
    const cost = globalAssignments[idx]
    if (cost === 0) {
      resultHTML += `<p style="font-size:1.05rem; margin: 0.6rem 0;"><strong>${name}</strong> : <span style="color:green; font-weight:bold;">🎉 0원</span></p>`
    } else {
      resultHTML += `<p style="font-size:1.05rem; margin: 0.6rem 0;"><strong>${name}</strong> : <span style="color:#333;">${cost.toLocaleString()} 원</span></p>`
    }
  })

  resultCard.innerHTML = resultHTML
  resultCard.classList.remove('hidden')
  resultCard.classList.add('show')
}

window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search)
  const tab = urlParams.get('tab')
  if (tab) {
    showSection(tab)
  }
})
