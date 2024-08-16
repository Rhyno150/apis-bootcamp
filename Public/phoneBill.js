function totalPhoneBill(str) {
    let listNew = str.split(',');
      var cost = 0;
      for (let item of listNew) {
        if (item.trim() == 'sms') {
          cost += 0.65;
        } else if (item.trim() == 'call') {
            cost += 2.75;
        }
        
      }
      return 'R'+cost.toFixed(2);
    }