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
      id: '1',
      occupation: 'Carpenter',
      label: 'Narayan',
      location: 'thapathai',
      phoneNumber: '9802001919',
      remark: 'indian/ fast/ expensive'
    },
      {
        id: '2',
        occupation: 'computer / camrea',
        label: 'Praduman',
        location: '',
        phoneNumber: '9851123169',
        remark: 'reliable/jugad'
      },
      {
        id: '3',
        occupation: 'camera / computer',
        label: 'suresji',
        location: '',
        phoneNumber: '9851127985',
        remark: 'good /'
      },
      {
        id: '4',
        occupation: 'plumber',
        label: 'malik',
        location: '',
        phoneNumber: '9841312962',
        remark: ''
      },
      {
        id: '5',
        occupation: 'water proofing',
        label: 'sanker',
        location: '',
        phoneNumber: '9841469226',
        remark: 'good'
      },
      {
        id: '6',
        occupation: 'painter',
        label: 'kesav',
        location: '',
        phoneNumber: '9841008648',
        remark: 'good'
      },
      {
        id: '7',
        occupation: 'painter',
        label: 'santosh',
        location: '',
        phoneNumber: '9851063076',
        remark: 'reliable/expensive'
      },
      {
        id: '8',
        occupation: 'acp fitting',
        label: 'abhay',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '9',
        occupation: 'false celing / paint / partician',
        label: 'raj kumar',
        location: '',
        phoneNumber: '9851085080',
        remark: 'reliable/fast'
      },
      {
        id: '10',
        occupation: 'glass sticker',
        label: 'mukesh',
        location: '',
        phoneNumber: '9849733366',
        remark: 'good'
      },
      {
        id: '11',
        occupation: 'glass',
        label: 'sanjay',
        location: '',
        phoneNumber: '9851007818',
        remark: 'owner / fast'
      },
      {
        id: '12',
        occupation: 'Cleaning / security / etc',
        label: 'Royal services',
        location: '',
        phoneNumber: '9849939227',
        remark: 'they provide lot of services'
      },
      {
        id: '13',
        occupation: 'sofa / civil / electrical etc',
        label: 'Nepal Solution',
        location: '',
        phoneNumber: '98510-72105, 9803310408',
        remark: ''
      },
      {
        id: '14',
        occupation: 'Electrician',
        label: 'Rajkumar',
        location: '',
        phoneNumber: '9851039893',
        remark: 'reliable/expensive'
      },
      {
        id: '15',
        occupation: 'Plumber',
        label: 'Gangadhar',
        location: '',
        phoneNumber: '9803090733',
        remark: 'Very good/ reliable'
      },
      {
        id: '16',
        occupation: 'Computer/wifi/laptop',
        label: 'Aftab',
        location: '',
        phoneNumber: '9807104795',
        remark: 'good / Jugad'
      },
      {
        id: '17',
        occupation: 'Painter (designs & official)',
        label: 'Balram',
        location: '',
        phoneNumber: '9851079780',
        remark: 'very good/ reliable'
      },
      {
        id: '18',
        occupation: 'Painter (House & Rooms)',
        label: 'Jairam',
        location: '',
        phoneNumber: '9813127434',
        remark: 'very good/ reliable'
      },
      {
        id: '19',
        occupation: 'Carpenter',
        label: 'Shanker',
        location: '',
        phoneNumber: '9818530414',
        remark: 'good'
      },
      {
        id: '20',
        occupation: 'Computer/wifi/ac/generator',
        label: 'Globallink (Umesh)',
        location: 'thapathali',
        phoneNumber: '9851173839',
        remark: 'good / very good for amc\'s'
      }
    ],
  cakeAndBakery: [
      {
        id: '',
        label: '',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '1',
        label: 'European Bakery',
        'Contact Person': '',
        location: 'Bhakta Marga',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '2',
        label: 'Vienna Bakery',
        'Contact Person': '',
        location: 'Jhamsikhel',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '3',
        label: 'Annapurna Cake Shop',
        'Contact Person': '',
        location: 'Durbar Marg',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '4',
        label: 'Annapurna Cake Shop',
        'Contact Person': '',
        location: 'Jhamsikhel',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '5',
        label: 'Radisson Cake Shop',
        'Contact Person': '',
        location: 'Lazimpat',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '6',
        label: 'Bakes n Cakes',
        'Contact Person': '',
        location: 'Durbar Marg',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '7',
        label: 'Le Sukre',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '8',
        label: 'Fine Grain Bakery',
        'Contact Person': '',
        location: 'Swayambhu',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '9',
        label: 'Bake my Wish by Shivani',
        'Contact Person': 'Shivani Agarwal',
        location: 'New Baneshwor',
        phoneNumber: '9801022339',
        remark: ''
      },
      {
        id: '10',
        label: 'Imago Dei',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '11',
        label: 'The Bakery Cafe',
        'Contact Person': '',
        location: '',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '12',
        label: 'Hermann Helmer\'s German Bakery',
        'Contact Person': '',
        location: 'Jawalakhel,',
        phoneNumber: '01-5524900',
        remark: ''
      },
      {
        id: '13',
        label: 'Chefs Bakery & Confectionery',
        'Contact Person': '',
        location: 'Baneshwor,',
        phoneNumber: '01-6634944',
        remark: ''
      },
      {
        id: '14',
        label: 'European Bakery',
        'Contact Person': '',
        location: 'Baluwatar',
        phoneNumber: '01-4422047',
        remark: ''
      },
      {
        id: '15',
        label: 'JULIE\'S CAKES & PASTRIES',
        'Contact Person': '',
        location: 'Lazimpat',
        phoneNumber: '01-5011685',
        remark: ''
      },
      {
        id: '16',
        label: 'HERMANN HELMERS',
        'Contact Person': '',
        location: 'Jawalakhel,',
        phoneNumber: '01-5524900',
        remark: ''
      },
      {
        id: '17',
        label: 'Royal Alina\'s Bakery Cafe',
        'Contact Person': '',
        location: 'Kanti Path',
        phoneNumber: '01-4247900',
        remark: ''
      },
      {
        id: '18',
        label: 'Fine Grains Bakery',
        'Contact Person': '',
        location: 'swayambhu',
        phoneNumber: '01-4278857',
        remark: ''
      },
      {
        id: '20',
        label: 'Makoo Bakery',
        'Contact Person': '',
        location: 'Jawalakhel',
        phoneNumber: '01-5522997',
        remark: ''
      },
      {
        id: '21',
        label: 'ALINA\'S BAKERY CAFE',
        'Contact Person': '',
        location: '',
        phoneNumber: '01-4782383',
        remark: ''
      },
      {
        id: '22',
        label: 'just baked Bakery & Cafe',
        'Contact Person': '',
        location: 'Battisputali',
        phoneNumber: '01-6205126',
        remark: ''
      },
      {
        id: '23',
        label: 'Vienna Bakery',
        'Contact Person': '',
        location: 'Jawalakhel',
        phoneNumber: '',
        remark: ''
      },
      {
        id: '24',
        label: 'Nanglo Bakery & Cafe',
        'Contact Person': '',
        location: 'Durbar Marg',
        phoneNumber: '01-4222636',
        remark: ''
      },
      {
        id: '25',
        label: 'Krishna Bakery & Confectionery',
        'Contact Person': '',
        location: 'kamal pokhari',
        phoneNumber: '01-4411452',
        remark: ''
      },
      {
        id: '26',
        label: 'Kathmandu J Bakery',
        'Contact Person': '',
        location: '',
        phoneNumber: '01-4361070',
        remark: ''
      },
      {
        id: '27',
        label: 'Snowman Cafe',
        'Contact Person': '',
        location: 'Jhochhen',
        phoneNumber: '01-4246606',
        remark: ''
      },
      {
        id: '28',
        label: 'ND\'s Cafe & Restaurant',
        'Contact Person': '',
        location: 'mahabouddha',
        phoneNumber: '01-4220674',
        remark: ''
      },
      {
        id: '28',
        label: 'master baker and confectionery',
        'Contact Person': '',
        location: '',
        phoneNumber: '01-4418649',
        remark: ''
      },
      {
        id: '29',
        label: 'Brezel Bakery',
        'Contact Person': '',
        location: 'Thamel',
        phoneNumber: '01-700295',
        remark: ''
      }
    ]
};

export { vendorList, serviceList };
