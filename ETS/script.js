$(document).ready(function () {
    $.ajax({
        url: 'http://apilayer.net/api/live?pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR',
        type: 'get',
        dataType: 'json',
        data: {
            'access_key': 'e8a4dee7ff5781fbb42079de27ff938c'
        },
        success: function (data) {
            if (data && data.rates) {
                let rates = data.rates;
                let container = $('#api-container');
                
                for (let pairs in rates) {
                    let rateData = rates[pairs];
                    let html = `
                        <div class="col-md-3">
                            <div class="card shadow h-100">
                                <div class="card">
                                    <div class="card-body text-black">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="text-end">
                                                <div class="fs-4 fw-bold">${pairs}</div>
                                                <div class="text-end">${rateData.rate}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    container.append(html);
                }
            }
        },
    });
});
