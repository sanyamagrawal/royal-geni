const serviceList = [{
  id: 1,
  label: 'Handy Man',
  value: 'handyMan'
}, {
  id: 2,
  label: 'Cake And Bakery',
  value: 'cakeAndBakery'
}, {
  id: 3,
  label: 'Flower and gifts',
  value: 'flowerAndGifts'
}, {
  id: 4,
  label: 'Electronics',
  value: 'electronics'
}, {
  id: 5,
  label: 'Groceries',
  value: 'groceries'
}, {
  id: 6,
  label: 'Department Stores',
  value: 'departmentStores'
}, {
  id: 7,
  label: 'Restaurants',
  value: 'restaurants'
}, {
  id: 8,
  label: 'Movies',
  value: 'movies'
}, {
  id: 9,
  label: 'Travel',
  value: 'travel'
}, {
  id: 10,
  label: 'Events',
  value: 'events'
}, {
  id: 11,
  label: 'Automobiles - Trade & Repair',
  value: 'automobiles'
}, {
  id: 12,
  label: 'Traffic',
  value: 'traffic'
}, {
  id: 13,
  label: 'News',
  value: 'news'
}];

const vendorList = {
  handyMan: [{
      'S.No': '1',
      occupation: 'Carpenter',
      label: 'Narayan',
      location: 'thapathai',
      phoneNumber: '9802001919',
      remark: 'indian/ fast/ expensive'
    },
      {
        'S.No': '2',
        occupation: 'computer / camrea',
        label: 'Praduman',
        location: '',
        phoneNumber: '9851123169',
        remark: 'reliable/jugad'
      },
      {
        'S.No': '3',
        occupation: 'camera / computer',
        label: 'suresji',
        location: '',
        phoneNumber: '9851127985',
        remark: 'good /'
      },
      {
        'S.No': '4',
        occupation: 'plumber',
        label: 'malik',
        location: '',
        phoneNumber: '9841312962',
        remark: ''
      },
      {
        'S.No': '5',
        occupation: 'water proofing',
        label: 'sanker',
        location: '',
        phoneNumber: '9841469226',
        remark: 'good'
      },
      {
        'S.No': '6',
        occupation: 'painter',
        label: 'kesav',
        location: '',
        phoneNumber: '9841008648',
        remark: 'good'
      },
      {
        'S.No': '7',
        occupation: 'painter',
        label: 'santosh',
        location: '',
        phoneNumber: '9851063076',
        remark: 'reliable/expensive'
      },
      {
        'S.No': '8',
        occupation: 'acp fitting',
        label: 'abhay',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '9',
        occupation: 'false celing / paint / partician',
        label: 'raj kumar',
        location: '',
        phoneNumber: '9851085080',
        remark: 'reliable/fast'
      },
      {
        'S.No': '10',
        occupation: 'glass sticker',
        label: 'mukesh',
        location: '',
        phoneNumber: '9849733366',
        remark: 'good'
      },
      {
        'S.No': '11',
        occupation: 'glass',
        label: 'sanjay',
        location: '',
        phoneNumber: '9851007818',
        remark: 'owner / fast'
      },
      {
        'S.No': '12',
        occupation: 'Cleaning / security / etc',
        label: 'Royal services',
        location: '',
        phoneNumber: '9849939227',
        remark: 'they provide lot of services'
      },
      {
        'S.No': '13',
        occupation: 'sofa / civil / electrical etc',
        label: 'Nepal Solution',
        location: '',
        phoneNumber: '98510-72105, 9803310408',
        remark: ''
      },
      {
        'S.No': '14',
        occupation: 'Electrician',
        label: 'Rajkumar',
        location: '',
        phoneNumber: '9851039893',
        remark: 'reliable/expensive'
      },
      {
        'S.No': '15',
        occupation: 'Plumber',
        label: 'Gangadhar',
        location: '',
        phoneNumber: '9803090733',
        remark: 'Very good/ reliable'
      },
      {
        'S.No': '16',
        occupation: 'Computer/wifi/laptop',
        label: 'Aftab',
        location: '',
        phoneNumber: '9807104795',
        remark: 'good / Jugad'
      },
      {
        'S.No': '17',
        occupation: 'Painter (designs & official)',
        label: 'Balram',
        location: '',
        phoneNumber: '9851079780',
        remark: 'very good/ reliable'
      },
      {
        'S.No': '18',
        occupation: 'Painter (House & Rooms)',
        label: 'Jairam',
        location: '',
        phoneNumber: '9813127434',
        remark: 'very good/ reliable'
      },
      {
        'S.No': '19',
        occupation: 'Carpenter',
        label: 'Shanker',
        location: '',
        phoneNumber: '9818530414',
        remark: 'good'
      },
      {
        'S.No': '20',
        occupation: 'Computer/wifi/ac/generator',
        label: 'Globallink (Umesh)',
        location: 'thapathali',
        phoneNumber: '9851173839',
        remark: 'good / very good for amc\'s'
      }
    ],
  cakeAndBakery: [
      {
        'S.No': '',
        label: '',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '1',
        label: 'European Bakery',
        'Contact Person': '',
        location: 'Bhakta Marga',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '2',
        label: 'Vienna Bakery',
        'Contact Person': '',
        location: 'Jhamsikhel',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '3',
        label: 'Annapurna Cake Shop',
        'Contact Person': '',
        location: 'Durbar Marg',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '4',
        label: 'Annapurna Cake Shop',
        'Contact Person': '',
        location: 'Jhamsikhel',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '5',
        label: 'Radisson Cake Shop',
        'Contact Person': '',
        location: 'Lazimpat',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '6',
        label: 'Bakes n Cakes',
        'Contact Person': '',
        location: 'Durbar Marg',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '7',
        label: 'Le Sukre',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '8',
        label: 'Fine Grain Bakery',
        'Contact Person': '',
        location: 'Swayambhu',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '9',
        label: 'Bake my Wish by Shivani',
        'Contact Person': 'Shivani Agarwal',
        location: 'New Baneshwor',
        phoneNumber: '9801022339',
        remark: ''
      },
      {
        'S.No': '10',
        label: 'Imago Dei',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '11',
        label: 'The Bakery Cafe',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '12',
        label: 'Hermann Helmer\'s German Bakery',
        'Contact Person': '',
        location: 'Jawalakhel,',
        phoneNumber: '01-5524900',
        remark: ''
      },
      {
        'S.No': '13',
        label: 'Chefs Bakery & Confectionery',
        'Contact Person': '',
        location: 'Baneshwor,',
        phoneNumber: '01-6634944',
        remark: ''
      },
      {
        'S.No': '14',
        label: 'European Bakery',
        'Contact Person': '',
        location: 'Baluwatar',
        phoneNumber: '01-4422047',
        remark: ''
      },
      {
        'S.No': '15',
        label: 'JULIE\'S CAKES & PASTRIES',
        'Contact Person': '',
        location: 'Lazimpat',
        phoneNumber: '01-5011685',
        remark: ''
      },
      {
        'S.No': '16',
        label: 'HERMANN HELMERS',
        'Contact Person': '',
        location: 'Jawalakhel,',
        phoneNumber: '01-5524900',
        remark: ''
      },
      {
        'S.No': '17',
        label: 'Royal Alina\'s Bakery Cafe',
        'Contact Person': '',
        location: 'Kanti Path',
        phoneNumber: '01-4247900',
        remark: ''
      },
      {
        'S.No': '18',
        label: 'Fine Grains Bakery',
        'Contact Person': '',
        location: 'swayambhu',
        phoneNumber: '01-4278857',
        remark: ''
      },
      {
        'S.No': '20',
        label: 'Makoo Bakery',
        'Contact Person': '',
        location: 'Jawalakhel',
        phoneNumber: '01-5522997',
        remark: ''
      },
      {
        'S.No': '21',
        label: 'ALINA\'S BAKERY CAFE',
        'Contact Person': '',
        location: '',
        phoneNumber: '01-4782383',
        remark: ''
      },
      {
        'S.No': '22',
        label: 'just baked Bakery & Cafe',
        'Contact Person': '',
        location: 'Battisputali',
        phoneNumber: '01-6205126',
        remark: ''
      },
      {
        'S.No': '23',
        label: 'Vienna Bakery',
        'Contact Person': '',
        location: 'Jawalakhel',
        phoneNumber: '',
        remark: ''
      },
      {
        'S.No': '24',
        label: 'Nanglo Bakery & Cafe',
        'Contact Person': '',
        location: 'Durbar Marg',
        phoneNumber: '01-4222636',
        remark: ''
      },
      {
        'S.No': '25',
        label: 'Krishna Bakery & Confectionery',
        'Contact Person': '',
        location: 'kamal pokhari',
        phoneNumber: '01-4411452',
        remark: ''
      },
      {
        'S.No': '26',
        label: 'Kathmandu J Bakery',
        'Contact Person': '',
        location: '',
        phoneNumber: '01-4361070',
        remark: ''
      },
      {
        'S.No': '27',
        label: 'Snowman Cafe',
        'Contact Person': '',
        location: 'Jhochhen',
        phoneNumber: '01-4246606',
        remark: ''
      },
      {
        'S.No': '28',
        label: 'ND\'s Cafe & Restaurant',
        'Contact Person': '',
        location: 'mahabouddha',
        phoneNumber: '01-4220674',
        remark: ''
      },
      {
        'S.No': '28',
        label: 'master baker and confectionery',
        'Contact Person': '',
        location: '',
        phoneNumber: '01-4418649',
        remark: ''
      },
      {
        'S.No': '29',
        label: 'Brezel Bakery',
        'Contact Person': '',
        location: 'Thamel',
        phoneNumber: '01-700295',
        remark: ''
      }
    ]
};

export { vendorList, serviceList };
