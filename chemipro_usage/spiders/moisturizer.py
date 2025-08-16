import scrapy
from scrapy_playwright.page import PageMethod

class MoisturizerSpider(scrapy.Spider):
    name = "moisturizer"
     
    def start_requests(self):
        yield scrapy.Request("https://www.purplle.com/skin",
                              meta=dict(
            playwright=True,
            playwright_include_page=True,
            playwright_page_methods = [
                PageMethod("wait_for_selector", "pds-container.container")
            ]
        ))
    def parse(self, response):
        yield {
            'text' : response.text
        }