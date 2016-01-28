starter.app.constant('bleConfig', {
  'deviceId': "R4:D1:4N:02", // dummy number which prevents crashes
  'performingFirmwareUpdate': false,

  'UART_GET_CAM_SETTINGS_ARRAY': '0x03',
  'UART_GET_CAM_SETTINGS': '0x02',
  'APERTURE': 'APERTURE',
  'SHUTTER': "SHUTTER",
  'ISO': 'ISO',
  'MAX_BLE_PKT_LEN': 20, //number of values we can actually send in a guven uart callback
  'CHUNKS_PER_PAGE': 10,

  'page_start_overhead': 3, //# bytes at start of page to rip out
  'num_bytes_in_page': 1024,

  'gotChar': false,
  'ackTimeout': 100,

  'recovering': false,
  'pkt_num': 0,
  'num_packets_expected': 0,
  'length_expected': 0,

  //thumbnail variables
  'rcving_thumb': false,
  'chanHit': [false, false, false, false, false, false],
  'pageNumber': 0,
  'chunkNumber': 0,
  'chunkIndex': 0,
  'thumb_chunk_num': 0,
  'num_pages_expected': 0,
  'packets_recieved': 0,
  'doIt': true,

  camSettings: {
    service: "1901",
    shutterState: "3001",
    shutterSpeed: "3002",
    aperture: "3003",
    iso: "3004",
    whiteBalance: "3005",
    exposureCompensation: "3006"
  },

  //generic uart transport service for new functionality
  UART: {
    service: "1904",
    write: "3030",
    uart_delay_ms: "3031", //characteristic used to set the ms delay on the uart sends
    //uart read chars : read0 is for all stuff, read1-5 is also for thumbnail data
    read0: "3032",
    read1: "3033",
    read2: "3034",
    read3: "3035",
    read4: "3036",
    read5: "3037"
  },

  //service for the kinetis bootloader updater
  KlBootloader: {
    service: "1903",
    BlData: "3020",
    RcvStatus: "3021"
  },

  TLSettings: {
    service: "1902",
    numPhotosTaken: "3011",
    isRunningTL: "3010",
    TLData: "3012",
    RcvStatus: "3013"
  },

  deviceInformation: {
    service: "180A",
    manufacturer: "2A29",
    model: "2A24",
    serial: "2A25",
    hardware: "2A27",
    firmware: "2A26",
    software: "2A28",
    batteryService: "180F",
    batteryLevel: "2A19"
  }
});
