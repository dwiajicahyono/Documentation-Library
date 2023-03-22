const displayTime = () => {
    moment.locale('id');
    $('.jam').text(moment().format('LTS'));
    $('.tanggal').text(moment().format('LL'));
  };
  
  const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
  };
  
  updateTime();