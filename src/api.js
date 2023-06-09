const service = {
  Консультация: [
    {
      code: 'В01.065.007.001',
      description: 'Прием (осмотр) врача-стоматолога',
      price: 250,
      val: 0,
    },
    {
      code: 'В01.065.007.003',
      description:
        'Прием (осмотр) врача-стоматолога с составлением комплексного плана лечения',
      price: 1000,
      val: 0,
    },
    {
      code: 'B01.066.002',
      description:
        'Прием (осмотр, консультация) врача-стоматолога-ортопеда первичный',
      price: 500,
      val: 0,
    },
    {
      code: 'В01.067.001',
      description:
        'Прием (осмотр, консультация) врача-стоматолога-хирурга первичный',
      price: 500,
      val: 0,
    },
    {
      code: 'B01.067.002',
      description: 'Прием (осмотр, консультация) врача-стоматолога-терапевта',
      price: 300,
      val: 0,
    },
  ],

  'Исследования и диагностика': [
    {
      code: 'A05.07.001',
      description: 'Электроодонтометрия зуба (ЭОД)',
      price: 200,
      val: 0,
    },
    {
      code: 'А02.07.010',
      description: 'Исследование на диагностических моделях челюстей',
      price: 800,
      val: 0,
    },
  ],
  ' Анестезия инъекции': [
    {
      code: 'B01.003.004.002',
      description: 'Проводниковая анестезия',
      price: 350,
      val: 0,
    },
    {
      code: 'B01.003.004.004',
      description: 'Аппликационная анестезия',
      price: 150,
      val: 0,
    },
    {
      code: 'B01.003.004.005',
      description: 'Инфильтрационная анестезия',
      price: 350,
      val: 0,
    },
    {
      code: 'A25.07.001',
      description:
        'Назначение лекарственных препаратов при заболеваниях полости рта и зубов',
      price: 100,
      val: 0,
    },
  ],
  Профилактика: [
    {
      code: 'А14.07.008',
      description:
        'Обучение гигиене полости рта и зубов индивидуальное, подбор средств и предметов гигиены полости рта',
      price: 200,
      val: 0,
    },
    {
      code: 'А22.07.002',
      description:
        'Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба',
      price: 150,
      val: 0,
    },
    {
      code: 'А16.07.051.001',
      description:
        'Профессиональная гигиена полости рта и зубов (снятие мягкого налета с одного зуба)',
      price: 350,
      val: 0,
    },
    {
      code: 'А16.07.051.002',
      description:
        'Профессиональная гигиена полости рта и зубов (простая: применение ультразвука и полировка зубов)',
      price: 3200,
      val: 0,
    },
    {
      code: 'А16.07.051.003',
      description:
        'Профессиональная гигиена полости рта и зубов (сложная: применение ультразвука,полировка зубов,использование Air Flow)',
      price: 4500,
      val: 0,
    },
    {
      code: 'А16.07.057.001',
      description:
        'Запечатывание фиссуры зуба герметиком инвазивным методом (за один зуб)',
      price: 1100,
      val: 0,
    },
    {
      code: 'А16.07.057.002',
      description:
        'Запечатывание фиссуры зуба герметиком неинвазивным методом (за один зуб)',
      price: 760,
      val: 0,
    },
  ],
  'Восстановление зуба пломбой': [
    {
      code: 'А16.07.002',
      description: 'Восстановление зуба пломбой',
      price: 1800,
      val: 0,
    },
    {
      code: 'А16.07.002.005',
      description:
        'Восстановление зуба пломбой IV класс по Блэку с использованием стеклоиномерных цементов',
      price: 1100,
      val: 0,
    },
    {
      code: 'А16.07.002.009',
      description: 'Наложение временной пломбы',
      price: 300,
      val: 0,
    },
    {
      code: 'А16.07.002.010',
      description:
        'Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров',
      price: 3100,
      val: 0,
    },
    {
      code: 'А16.07.002.011',
      description:
        'Восстановление зуба пломбой с нарушением контактного пункта II, III класс по Блэку с использованием материалов из фотополимеров',
      price: 3400,
      val: 0,
    },
    {
      code: 'А16.07.002.012',
      description:
        'Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров',
      price: 3600,
      val: 0,
    },
    {
      code: 'А16.07.002.013',
      description:
        'Восстановление стенок зуба фотополимерной пломбой перед эндодонтическим лечением',
      price: 1400,
      val: 0,
    },
    {
      code: 'А16.07.002.016',
      description:
        'Восстановление зуба с использованием лечебной прокладки (прямое или непрямое покрытие пульпы зуба)',
      price: 300,
      val: 0,
    },
    {
      code: 'А16.07.002.017',
      description:
        'Восстановление зуба пломбой с использованием системы изоляции коффердам',
      price: 350,
      val: 0,
    },
    {
      code: 'А16.07.002.018',
      description:
        'Восстановление зуба пломбой с использованием системы изоляции оптрагейт',
      price: 200,
      val: 0,
    },
    {
      code: 'А16.07.031',
      description:
        'Восстановление зуба пломбировочными материалами с использованием  штифтов',
      price: 2500,
      val: 0,
    },
  ],
  'Лечение осложнений кариеса': [
    {
      code: 'А22.07.004',
      description: 'Ультразвуковое расширение корневого канала зуба',
      price: 400,
      val: 0,
    },
    {
      code: 'А16.07.082.001',
      description: 'Распломбировка корневого канала ранее леченного пастой',
      price: 900,
      val: 0,
    },
    {
      code: 'А16.07.082.002',
      description:
        'Распломбировка корневого канала ранее леченного фосфат-цементом/резорцин-формальдегидным методом',
      price: 1300,
      val: 0,
    },
    {
      code: 'А16.07.082.003',
      description:
        'Распломбировка корневого канала ранее запломбированного гуттаперчей',
      price: 1300,
      val: 0,
    },
    {
      code: 'А16.07.082.003.1',
      description: 'Дальнейшее пломбирование ',
      price: 700,
      val: 0,
    },
    {
      code: 'А16.07.082.004',
      description: 'Частичная распломбировка корневого канала',
      price: 500,
      val: 0,
    },
    {
      code: 'А16.07.030',
      description:
        'Инструментальная и медикаментозная обработка корневого канала',
      price: 500,
      val: 0,
    },
    {
      code: 'А16.07.030.003',
      description:
        'Временное пломбирование лекарственным препаратом корневого канала',
      price: 600,
      val: 0,
    },
    {
      code: 'А16.07.030.007',
      description:
        'Инструментальная и медикаментозная обработка корневого канала с использованием системы изоляции коффердам',
      price: 350,
      val: 0,
    },
    {
      code: 'А16.07.008.001',
      description: 'Пломбирование корневого канала зуба пастой',
      price: 800,
      val: 0,
    },
    {
      code: 'А16.07.008.003',
      description: 'Закрытие перфорации стенки корневого канала зуба',
      price: 1000,
      val: 0,
    },
    {
      code: 'А16.07.008.004',
      description: 'Пломбирование корневого канала зуба вертикальным методом',
      price: 1300,
      val: 0,
    },
    {
      code: 'A16.07.094',
      description: 'Удаление внутриканального штифта/вкладки ',
      price: 1200,
      val: 0,
    },
    {
      code: 'A16.07.091',
      description: 'Снятие временной пломбы ',
      price: 150,
      val: 0,
    },
    {
      code: 'А16.07.091.001',
      description: 'Снятие постоянной пломбы',
      price: 300,
      val: 0,
    },
  ],
  'Ортопедически услуги': [
    {
      code: 'А02.07.010.001',
      description: 'Снятие оттиска с одной челюсти альгинатной массой',
      price: 400,
      val: 0,
    },
    {
      code: 'А02.07.010.002',
      description: 'Снятие оттиска с одной челюсти массой из С-силикона',
      price: 800,
      val: 0,
    },
    {
      code: 'А02.07.010.005',
      description:
        'Снятие оттиска с одной челюсти с использованием индивидуальной ложки',
      price: 800,
      val: 0,
    },
    {
      code: 'A16.07.004.001',
      description: 'Восстановление зуба коронкой временной прямым методом',
      price: 1700,
      val: 0,
    },
    {
      code: 'A16.07.004.003',
      description:
        'Восстановление зуба коронкой постоянной  металлокерамической стандартной',
      price: 7000,
      val: 0,
    },
    {
      code: 'A16.07.004.005',
      description:
        'Восстановление зуба коронкой постоянной безметалловой из диоксида циркония стандартная эстетика (метод окрашивания)',
      price: 19000,
      val: 0,
    },
    {
      code: 'А16.07.004.007',
      description: 'Восстановление зуба коронкой цельнолитой',
      price: 3500,
      val: 0,
    },
    {
      code: 'A16.07.033',
      description:
        'Восстановление зуба коронкой с использованием цельнолитой культевой вкладки',
      price: 3000,
      val: 0,
    },
    {
      code: 'A16.07.035.001',
      description:
        'Протезирование частичными съемными пластиночными протезами (1 челюсть)',
      price: 17000,
      val: 0,
    },
    {
      code: 'А16.07.023',
      description:
        'Протезирование зубов полными съемными пластиночными протезами',
      price: 19000,
      val: 0,
    },
    {
      code: 'A16.07.036.001',
      description:
        'Протезирование съемными бюгельными протезами с кламмерной фиксацией (1 челюсть): 2 опорно-удерживающих кламмера',
      price: 39000,
      val: 0,
    },
    {
      code: 'A16.07.006.001',
      description:
        'Протезирование зуба с использованием имплантата коронкой постоянной безметалловой из диоксида циркония с винтовой фиксацией (стандартная эстетика)',
      price: 18000,
      val: 0,
    },
    {
      code: 'А16.07.023.002',
      description:
        'Протезирование зубов полными съемными пластиночными протезами (1 челюсть) с опорой на имплантаты: фиксатор системы локатор',
      price: 15000,
      val: 0,
    },
  ],
  'Прочие ортопедические услуги': [
    {
      code: 'A16.07.053',
      description: 'Снятие несъемной ортопедической конструкции (1 ед.)',
      price: 500,
      val: 0,
    },
    {
      code: 'A16.07.092',
      description: 'Трепанация зуба, искусственной коронки ',
      price: 700,
      val: 0,
    },
    {
      code: 'A16.07.025',
      description: 'Избирательное пришлифовывание твердых тканей зубов (1 ед.)',
      price: 300,
      val: 0,
    },
    {
      code: 'A16.07.049.001',
      description:
        'Фиксация на постоянный цемент несъемных ортопедических конструкций (1 ед.)',
      price: 300,
      val: 0,
    },
    {
      code: 'A16.07.049.002',
      description:
        'Фиксация на постоянный цемент несъемных ортопедических конструкций с опорой на имплантаты (1 ед.)',
      price: 900,
      val: 0,
    },
    {
      code: 'A16.07.049.003',
      description:
        'Фиксация на временный цемент несъемных ортопедических конструкций (1 ед.)',
      price: 500,
      val: 0,
    },
  ],
  'Хирургические услуги': [
    {
      code: 'А16.07.001.001',
      description: 'Удаление временного зуба',
      price: 1100,
      val: 0,
    },
    {
      code: 'А16.07.001.002',
      description: 'Удаление постоянного зуба',
      price: 1500,
      val: 0,
    },
    {
      code: 'А16.07.001.003',
      description: 'Удаление зуба сложное с разъединением корней',
      price: 3000,
      val: 0,
    },
    {
      code: 'А16.07.001.005',
      description: 'Удаление подвижной стенки постоянного зуба',
      price: 500,
      val: 0,
    },
    {
      code: 'А16.07.007',
      description:
        'Резекция верхушки корня с ретроградным пломбированием корневого канала',
      price: 10000,
      val: 0,
    },
    {
      code: 'А16.07.011',
      description:
        'Вскрытие подслизистого или поднадкостничного очага воспаления в полости рта',
      price: 1100,
      val: 0,
    },
    {
      code: 'А16.07.013',
      description: 'Отсроченный кюретаж лунки удаленного зуба',
      price: 600,
      val: 0,
    },
    {
      code: 'А16.07.016',
      description: 'Цистотомия или цистэктомия',
      price: 4500,
      val: 0,
    },
    {
      code: 'А16.07.024.002',
      description:
        'Операция удаления ретинированного, дистопированного или сверхкомплектного зуба (сложная)',
      price: 8000,
      val: 0,
    },
    {
      code: 'А16.07.042',
      description: 'Пластика уздечки верхней губы',
      price: 3500,
      val: 0,
    },
    {
      code: 'А16.07.043',
      description: 'Пластика уздечки нижней губы',
      price: 3500,
      val: 0,
    },
    {
      code: 'А16.07.055.002',
      description: 'Синус-лифтинг открытый ',
      price: 17000,
      val: 0,
    },
    {
      code: 'А16.07.095.002',
      description:
        'Остановка луночного кровотечения с наложением швов с использованием гемостатических материалов',
      price: 500,
      val: 0,
    },
    {
      code: 'А16.07.096',
      description: 'Пластика перфорации верхнечелюстной пазухи',
      price: 7000,
      val: 0,
    },
    {
      code: 'A16.07.054.003',
      description:
        'Внутрикостная дентальная имплантация системы Оsstem (Ю.Корея) для дальнейшего зуборотезирования',
      price: 27000,
      val: 0,
    },
    {
      code: 'А16.07.054.005',
      description:
        'Внутрикостная дентальная имплантация :установка формирователя десны Osstem (Ю. Корея)',
      price: 3500,
      val: 0,
    },
    {
      code: 'А16.07.054.009',
      description: 'Реимплантация',
      price: 3900,
      val: 0,
    },
    {
      code: 'А16.30.026',
      description: 'Удаление имплантата',
      price: 5000,
      val: 0,
    },
  ],
  'Лабораторные конструкции': [
    {
      code: 'А23.07.002.035',
      description: 'Приварка кламмера',
      price: 2000,
      val: 0,
    },
    {
      code: 'А23.07.002.036',
      description: 'Приварка зуба',
      price: 2500,
      val: 0,
    },
    {
      code: 'А23.07.002.037',
      description: 'Починка перелома базиса самотвердеющей пластмассой',
      price: 2500,
      val: 0,
    },
    {
      code: 'А23.07.002.083',
      description: 'Изготовление каппы ',
      price: 10500,
      val: 0,
    },
  ],
};

export default service;
