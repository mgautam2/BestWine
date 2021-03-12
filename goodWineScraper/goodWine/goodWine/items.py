# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class GoodwineItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    rating= scrapy.Field()
    style = scrapy.Field()
    blend = scrapy.Field()
    variety = scrapy.Field()
    abv = scrapy.Field()
    price = scrapy.Field()
    activites = scrapy.Field()
    relatedBlends = scrapy.Field()	
