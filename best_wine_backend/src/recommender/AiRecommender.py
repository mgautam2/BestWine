import json
import math
import sys
import os

# TODO Take in json and url command line arguement. Select images for selected wines

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
    def __init__(self, info):
        self.sweetness = info['ABV']
        self.activites = info['Activities']
        self.price = info['Cost']
        self.tannicity = info['Tannicity']
        self.rating = info['Rating']
        self.type = info['Color']

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
    dir = os.path.dirname(__file__);
    if typePref == 'White' or typePref == 'No Pref':
        with open(dir + '/white_wine_data.txt') as f:
            data = json.load(f)
        for i in range(len(data)):
            if data[i] not in wines:
                wines.append(data[i])

    if typePref == 'Red' or typePref == 'No Pref':
        with open(dir + '/red_wine_data.txt') as f:
            data = json.load(f)
        for i in range(len(data)):
            if data[i] not in wines:
                wines.append(data[i])

    if typePref == 'Rose' or typePref == 'No Pref':
        with open(dir + '/rose_wine_data.txt') as f:
            data = json.load(f)
        for i in range(len(data)):
            if data[i] not in wines:
                wines.append(data[i])
    return wines

def filterByCost(priceCheck, wineList):
    retList = []
    for wineData in wineList:
        if 'price' in wineData:
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
    for wine in wineData:
        for wineActivity in wine['activites']:
            if (wineActivity == userRequest.activites):
                scoresDict[wine['name']] = scoresDict[wine['name']] + 3

def scoreWinesPerABV(userRequest, wineData, scoresDict):
    desiredSweetness = int(userRequest.sweetness)
    for wine in wineData:
        if 'abv' in wine:
            abvString = wine['abv'][0:2]
            abv = int(abvString)
            score = 5 - ((abv / 17) * 10 - desiredSweetness)
            scoresDict[wine['name']] = scoresDict[wine['name']] + score
        

def sortByScore(scoresDict, wineList, imageDict):
    sortedScores = sorted(scoresDict.items(), key=lambda x: x[1], reverse=True)
    toReturn = []
    counter = 0
    for i in sortedScores:
        t = imageDict[i[0]]
        toReturn.append([i[0], t, i[1]])
        counter = counter + 1
        if (counter >= 4):
            break
    return toReturn

def getImageDict(list):
    retDict = {}
    for data in list:
        retDict[data['name']] = data['image']
    return retDict
    


def getAIRecommendedWines(filename, outputFile):
    with open(filename) as f:
        data = json.load(f)
    outputs = []
    for userInput in data:
        request = Request(userInput)
        wineList = getWines(request.type)
        wineList = filterByCost(request.price_check, wineList)
        wineList = filterByRating(request.rating_check, wineList)
        imageDict = getImageDict(wineList)
        wineScoreList = createWineDict(wineList)
        scoreWinesPerActivity(request, wineList, wineScoreList)
        scoreWinesPerABV(request, wineList, wineScoreList)
        outputs.append(sortByScore(wineScoreList, wineList, imageDict))
        
    f = open(outputFile, "w")
    f.write(json.dumps(outputs))
    f.close()

def main():
    filename = sys.argv[1]
    outputFileName = sys.argv[2]
    getAIRecommendedWines(filename, outputFileName)
main()