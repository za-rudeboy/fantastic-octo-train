
module.exports = {
    news24Parser: function (result) {
        console.log('Mapping RSS response')

        var promise = new Promise(function (resolve) {
            var output = {}
            output.site = 'News 24'
            output.title = result.rss.channel.title
            output.publishedDate = result.rss.channel.pubDate

            var newsItems = []
            output.newsItems = newsItems

            result.rss.channel.item.forEach(function (item) {
                var newsItem = {}
                newsItem.title = item.title
                newsItem.description = item.description
                newsItem.link = item.link
                newsItem.publishedDate = item.pubDate
                newsItems.push(newsItem)
            }, this);

            resolve(output)
        })
        return promise
    }

}