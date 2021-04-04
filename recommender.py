import json
import math
import expert_recommender as expert

activity_map = dict({'Party': ['Popping Bottles', 'Party Wine'],
                     'Gift': ['Winning Over the Boss', 'Host/Hostess Gifting'],
                     'To Get Drunk': ['Boozy Beach Trips', 'Starting The Night', 'Happy Hour'],
                     'Drink Throughout the Day': ['End of Day Sipping', 'All-Day Sipping', 'Day Trips', 'Relaxing After Work'],
                     'Enjoy By Yourself': ['Treat Yo\'self', 'House Wine', 'Feeling Natural', 'Sipping Without Food', 'Summer Sipping'],
                     'Enjoy With Friends': ['Wine And Cheese Night', 'Pleasing A Crowd', 'Impressing On A Budget', 'Last Minute Wine Runs', 'Sipping Without Food', 'Netflix And Chill', 'Wine Cocktails'],
                     'Dinner Setting': ['Holiday Meals', 'Dinner With The Parents', 'Special Occasion Splurges', 'Picnics In The Park', 'Take-Out Night', 'Brunch Sipping', 'Weekday Dinner Pairings', 'Dinner Parties', 'Date Night'],
                     'Pair with a Meal': ['Cooking And Sipping', 'Spicy Pairings', 'Taco Tuesday', 'Asian Food', 'Pizza Night', 'Backyard BBQs', 'Indian Food', 'steamed mussels'],
                     'Specific Craving': ['Sounding Like A Wine Pro', 'Wine Geeks', 'Sweet Tooth Cravings', 'Winter White Wine Drinking', 'Cold Weather Hibernation', 'Red Wine Lovers Craving White']
                     })

class Request:
    def __init__(self, fields):
        self.sweetness = fields[0]
        self.activites = fields[1][1:len(fields[1])-1].split(" ")
        self.price = fields[2]
        self.tannicity = fields[3]
        self.acidity = fields[4]
        self.meal = fields[5]
        self.rating = fields[6]
        self.type = fields[7]

        if self.price == 'Under $10':
            self.price_check = lambda a : a < 10
        elif self.price == '$10-$15':
            self.price_check = lambda a : (a >= 10) and (a <= 15)
        elif self.price == '$15-$20':
            self.price_check = lambda a : (a >= 15) and (a <= 20)
        else:
            self.price_check = lambda a : a > 20

        if self.rating == 'Beyond Outstanding':
            self.rating_check = lambda a : a >= 90
        elif self.rating == 'Outstanding':
            self.rating_check = lambda a : a >= 85
        elif self.rating == 'Very Good':
            self.rating_check = lambda a : a >= 80
        elif self.rating == 'Soundly Made':
            self.rating_check = lambda a : a >= 75
        else:
            self.rating_check = lambda a : a >= 70

def getWines(typePref):
    wines = []
    if typePref == 'White' or typePref == 'No Pref':
        with open('white_wine_data.txt') as f:
            data = json.load(f)
        for i in range(len(data)):
            if data[i] not in wines:
                wines.append(data[i])

    if typePref == 'Red' or typePref == 'No Pref':
        with open('red_wine_data.txt') as f:
            data = json.load(f)
        for i in range(len(data)):
            if data[i] not in wines:
                wines.append(data[i])

    if typePref == 'Rose' or typePref == 'No Pref':
        with open('rose_wine_data.txt') as f:
            data = json.load(f)
        for i in range(len(data)):
            if name not in wines:
                wines.append(data[i])
    return wines

def filterByCost(priceCheck, wineList):
    retList = []
    for wineData in wineList:
        if priceCheck(float(wineData['price'])):
            retList.append(wineData)
    return retList

def filterByRating(ratingCheck, wineList):
    retList = []
    for wineData in wineList:
        if ratingCheck(float(wineData['rating'])):
            retList.append(wineData)
    return retList

def createWineDict(wineData):
    retDict = {}
    for data in wineData:
        retDict[data['name']] = 0
    return retDict

def scoreWinesPerActivity(userRequest, wineData, scoresDict):
    for activity in userRequest.activites:
        for wine in wineData:
            for wineActivity in wine['activites']:
                if wineActivity in activity_map.get(activity):
                    scoresDict[wine['name']] = scoresDict[wine['name']] + 1

def main():
    f = open("example_user_input.txt", "r")
    lines = f.readlines()
    for requestLine in lines:
        request = Request(requestLine.split(','))
        wineList = getWines(request.type)
        wineList = filterByCost(request.price_check, wineList)
        wineList = filterByRating(request.rating_check, wineList)
        wineScoreList = createWineDict(wineList)
        scoreWinesPerActivity(request, wineList, wineScoreList)
        print(wineScoreList)
    
    expert.calculateExpertRec()
main()