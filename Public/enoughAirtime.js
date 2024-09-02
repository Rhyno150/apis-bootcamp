function enoughAirtime(str, p){  
    let listNew = str.split(',');
      var cost = 0;
      for (let item of listNew) {
        if (item.trim() == 'sms') {
          cost += 0.75;
        } else if (item.trim() == 'call') {
          cost += 1.88;
        } else if (item.trim() == 'data'){
          cost += 12;
        }
      }
      if (p-cost>0) {
        return "R"+(p-cost).toFixed(2);
      } else {
        cost = 0;
        return "R"+cost.toFixed(2);
      }
    }