import scrapy
import re
from scrapy.selector import Selector
from ..items import GoodwineItem

class wineSpider(scrapy.Spider):
    name = 'wine'
    
    def parse(self, response):
        if response.status != 200:
            return

        tds = response.css('table.unstriped tbody tr .rcr-data-value').getall()
        trs = response.css('table.unstriped tbody tr .rcr-data-label').getall()

        item = GoodwineItem()
        item['name'] = response.css('header.article-header div h1::text').get()
        item['rating']= Selector(text=tds[0]).css("strong::text").get()   
        item['style'] = Selector(text=tds[1]).css("td::text").get().strip() 

        blendVarityA = re.search(r'<a.+>(.+)<\/a>(,.+)?<\/td>', tds[2]) 
        # blendVarityNoA = re.search(r'>,(.+)<\/td>', tds[2]) 
        blendVarityNoA = re.search(r'>\s*,(.*)\s*<', tds[2]) 
        blend_variety = ""

        if blendVarityA:
            blend_variety += blendVarityA.group(1)
            if len(blendVarityA.groups()) == 2:
                blend_variety += blendVarityA.group(2).strip()
        elif blendVarityNoA:
            blend_variety += blendVarityNoA.group(1).strip()
        
        typeGroup = re.search(r'-->\s*(\w+)\s*<\/td', trs[2])
        typeWine = ""
        if (typeGroup):
            typeWine = typeGroup.group(1)
        
        if typeWine == "Variety":
            item['variety'] = blend_variety
        elif typeWine == "Blend":
            item['blend'] = blend_variety
        
        item['abv'] = Selector(text=tds[5]).css("td::text").get().strip() 

        price = re.search(r'>\s*\$(\d+.?\d*)\s*', tds[6]) 

        if price:
            item['price'] = price.group(1)

        h2List = response.css('div.entry-content h2::text').getall()
    
        if h2List[0] == 'Perfect For' :
            item['activites'] = response.css('div.entry-content p a::text').getall() 

        if h2List[1] == 'Drink If You Like':
            item['relatedBlends'] = response.css('div.entry-content p::text').getall()[-2].strip()

        yield item
