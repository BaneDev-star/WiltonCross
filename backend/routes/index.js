var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wilton/base', function (req, res, next) {
  const A = (req.query.A === 'true');
  const B = (req.query.B === 'true');
  const C = (req.query.C === 'true');
  const D = parseFloat(req.query.D);
  const E = parseInt(req.query.E);
  const F = parseInt(req.query.F);

  var H, K;
  var M = 'M', P = 'P', T = 'T';
  if (A && B && !C) {
    H = M;
    K = D + (D * E / 100);
  } else if (A && B && C) {
    H = P;
    K = D + (D * (E - F) / 25.5);
  } else if (!A && B && C) {
    H = T;
    K = D - (D * F / 30);
  } else {
    // error
    res.json({
      'success': false,
      'msg': 'Error'
    })
  }
  res.json({
    'success': true,
    'data': {
      'H': H,
      'K': K
    },
    'msg': ''
  })
});

router.get('/wilton/custom1', function (req, res, next) {
  const A = (req.query.A === 'true');
  const B = (req.query.B === 'true');
  const C = (req.query.C === 'true');
  const D = parseFloat(req.query.D);
  const E = parseInt(req.query.E);
  const F = parseInt(req.query.F);

  var H, K;
  var M = 'M', P = 'P', T = 'T';
  if (A && B && !C) {
    H = M;
    K = D + (D * E / 100);
  } else if (A && B && C) {
    H = P;
    K = 2 * D + (D * E / 100)
  } else if (!A && B && C) {
    H = T;
    K = D - (D * F / 30);
  } else {
    // error
    res.json({
      'success': false,
      'msg': 'Error'
    })
  }
  res.json({
    'success': true,
    'data': {
      'H': H,
      'K': K
    },
    'msg': ''
  })
});

router.get('/wilton/custom2', function (req, res, next) {
  const A = (req.query.A === 'true');
  const B = (req.query.B === 'true');
  const C = (req.query.C === 'true');
  const D = parseFloat(req.query.D);
  const E = parseInt(req.query.E);
  const F = parseInt(req.query.F);

  var H, K;
  var M = 'M', P = 'P', T = 'T';
  if (A && B && !C) {
    H = T;
    K = D - (D * F / 30);
  } else if (A && B && C) {
    H = P;
    K = D + (D * (E - F) / 25.5);
  } else if (!A && B && C) {
    H = T;
    K = D - (D * F / 30);
  } else if (A && !B && C) {
    H = M;
    K = F + D + (D * E / 100)
  } else {
    // error
    res.json({
      'success': false,
      'msg': 'Error'
    })
  }
  res.json({
    'success': true,
    'data': {
      'H': H,
      'K': K
    },
    'msg': ''
  })
});

module.exports = router;
