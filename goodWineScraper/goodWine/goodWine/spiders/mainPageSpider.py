import scrapy
from .wineSpider import wineSpider


class mainPageSpider(scrapy.Spider):
    name = 'mainPage'
    
    def __init__ (self):
        self.PageCount = 1
        self.maxPage = 20
        self.wines = set()
        self.wineSpider = wineSpider()
        self.url = 'https://vinepair.com/review/category/wine/?fwp_style_w=white'
    
    start_urls = [
        'https://vinepair.com/review/category/wine/?fwp_style_w=white'
    ]

    def parse(self, response):
        if response.status != 200:
            return

        self.PageCount += 1
        winesUrl = response.css('div.grid-x div a::attr(href)').getall() 
        
        for wine in winesUrl:
            if wine.startswith("https://vinepair.com/review/"):
                self.wines.add(wine)

        
        
        yield response.follow('', callback=self.wineSpider.parse)
        for wine in self.wines:
            if wine is not None:
                yield response.follow(wine, callback=self.wineSpider.parse)
        
        newUrl = self.url + '&fwp_paged=' + str(self.PageCount)

        if self.PageCount <= self.maxPage:
          yield response.follow(newUrl, callback = self.parse)   
        
        