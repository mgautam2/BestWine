from collections import defaultdict
import json
import sys

wineData = [
["Acrobat Pinot Gris 2018", "White", "15-20"],
["Ravines Dry Riesling Finger Lakes 2016", "White", "10-15"],
["Colome Torrontes 2017", "White", "under 10"],
["Susana Balbo Crios Torrontes 2018", "White", "15-20"],
["Stella Rosa Moscato d'Asti", "White", "10-15"],
["DeLoach Heritage Reserve Chardonnay 2019", "White", "under 10"],
["Michele Chiarlo Moscato d'Asti Nivole 2019", "White", "15-20"],
["Angeline Pinot Noir Reserve 2019", "Red", "15-20"],
["The Big Red Monster Cabernet Sauvignon", "Red", "15-20"],
["Cline Zinfandel Ancient Vines 2018", "Red", "10-15"],
["Andrew Murray Vineyards Syrah Tous les Jours 2017", "Red", "10-15"],
["Aviary Birds of Prey Red Blend 2018", "Red", "over 20"],
["J. Lohr Los Osos Merlot 2018", "Red", "10-15"],
["Cycles Gladiator Merlot 2018", "Red", "under 10"],
["Chateau d’Esclans Whispering Angel Rose 2019", "Rose", "15-20"],
["Mateus Dry Rose 2019", "Rose", "10-15"],
["Roches de Provence Rose 2019", "Rose", "10-15"],
["Summer Water Rose 2019", "Rose", "over 20"],
["Domaine Chantepierre Tavel Rose 2019", "Rose", "15-20"],
["19 Crimes Snoop Cali Rosé", "Rose", "10-15"]
]
    
# 1. On a scale of 1 to 10, how much do you like drinking sweet beverages?
def q1(recommendations):
    recommendations["Acrobat Pinot Gris 2018"] += 1
    recommendations["The Big Red Monster Cabernet Sauvignon"] += 1
    recommendations["Roches de Provence Rose 2019"] += 1
    recommendations["Susana Balbo Crios Torrontes 2018"] += 2
    recommendations["DeLoach Heritage Reserve Chardonnay 2019"] += 2
    recommendations["Angeline Pinot Noir Reserve 2019"] += 2
    recommendations["Chateau d’Esclans Whispering Angel Rose 2019"] += 2
    recommendations["Summer Water Rose 2019"] += 2
    recommendations["19 Crimes Snoop Cali Rosé"] += 2
    recommendations["Colome Torrontes 2017"] += 3
    recommendations["Cline Zinfandel Ancient Vines 2018"] += 3
    recommendations["Aviary Birds of Prey Red Blend 2018"] += 3
    recommendations["Mateus Dry Rose 2019"] += 3
    recommendations["Domaine Chantepierre Tavel Rose 2019"] += 3
    recommendations["Ravines Dry Riesling Finger Lakes 2016"] += 4
    recommendations["J. Lohr Los Osos Merlot 2018"] += 4
    recommendations["Cycles Gladiator Merlot 2018"] += 4
    recommendations["Stella Rosa Moscato d'Asti"] += 5
    recommendations["Michele Chiarlo Moscato d'Asti Nivole 2019"] += 5
    recommendations["Andrew Murray Vineyards Syrah Tous les Jours 2017"] += 5

# 2. What is the occasion you want this wine for? 
def q2(recommendations, response):
    purposes = response.split(' ')
    for p in purposes:
        # whites
        if p == 'Party' or p == 'Gift' or p == 'Enjoy With Friends' or p == 'Drink Throughout the Day':
            recommendations["Acrobat Pinot Gris 2018"] += 2
            recommendations["Ravines Dry Riesling Finger Lakes 2016"] += 2
            recommendations["Colome Torrontes 2017"] += 2
            recommendations["Susana Balbo Crios Torrontes 2018"] += 2
            recommendations["Stella Rosa Moscato d'Asti"] += 2
            recommendations["DeLoach Heritage Reserve Chardonnay 2019"] += 2
            recommendations["Michele Chiarlo Moscato d'Asti Nivole 2019"] += 2

        # reds
        if p == 'Gift' or p == 'Specific Craving' or p == 'Pair with a Meal' or p == 'Dinner Setting' or p == 'Enjoy With Friends' or p == 'To Get Drunk':
            recommendations["Angeline Pinot Noir Reserve 2019"] += 2
            recommendations["The Big Red Monster Cabernet Sauvignon"] += 2
            recommendations["Cline Zinfandel Ancient Vines 2018"] += 2
            recommendations["Andrew Murray Vineyards Syrah Tous les "] += 2
            recommendations["Jours 2017"] += 2
            recommendations["Aviary Birds of Prey Red Blend 2018"] += 2
            recommendations["J. Lohr Los Osos Merlot 2018"] += 2
            recommendations["Cycles Gladiator Merlot 2018"] += 2
        
        # roses
        if p == 'Party' or p == 'Gift' or p == 'Enjoy With Friends' or p == 'Drink Throughout the Day':
            recommendations["Chateau d’Esclans Whispering Angel Rose 2019"] += 2
            recommendations["Mateus Dry Rose 2019"] += 2
            recommendations["Roches de Provence Rose 2019"] += 2
            recommendations["Summer Water Rose 2019"] += 2
            recommendations["Domaine Chantepierre Tavel Rose 2019"] += 2
            recommendations["19 Crimes Snoop Cali Rosé"] += 2

# 3. How much are you willing to spend on wine today?
def q3(recommendations, response):
    if response == 'Under $10':
        recommendations["Cycles Gladiator Merlot 2018"] += 3
        recommendations["Colome Torrontes 2017"] += 3
        recommendations["DeLoach Heritage Reserve Chardonnay 2019"] += 3

    if response == '$10-$15':
        recommendations["Ravines Dry Riesling Finger Lakes 2016"] += 3
        recommendations["Stella Rosa Moscato d'Asti"] += 3
        recommendations["Cline Zinfandel Ancient Vines 2018"] += 3
        recommendations["Andrew Murray Vineyards Syrah Tous les Jours 2017"] += 3
        recommendations["J. Lohr Los Osos Merlot 2018"] += 3
        recommendations["Mateus Dry Rose 2019"] += 3
        recommendations["Roches de Provence Rose 2019"] += 3
        recommendations["19 Crimes Snoop Cali Rosé"] += 3

    if response == '$15-$20':
        recommendations["Susana Balbo Crios Torrontes 2018"] += 3
        recommendations["Acrobat Pinot Gris 2018"] += 3
        recommendations["Michele Chiarlo Moscato d'Asti Nivole 2019"] += 3
        recommendations["Angeline Pinot Noir Reserve 2019"] += 3
        recommendations["The Big Red Monster Cabernet Sauvignon"] += 3
        recommendations["Chateau d’Esclans Whispering Angel Rose 2019"] += 3
        recommendations["Domaine Chantepierre Tavel Rose 2019"] += 3

    if response == 'Over $20':    
        recommendations["Aviary Birds of Prey Red Blend 2018"] += 3
        recommendations["Summer Water Rose 2019"] += 3
        

# 4. How tannic would you prefer your wine? 
def q4(recommendations):
    recommendations["Acrobat Pinot Gris 2018"] += 1
    recommendations["Susana Balbo Crios Torrontes 2018"] += 1
    recommendations["DeLoach Heritage Reserve Chardonnay 2019"] += 1
    recommendations["Colome Torrontes 2017"] += 2
    recommendations["Chateau d’Esclans Whispering Angel Rose 2019"] += 2
    recommendations["Mateus Dry Rose 2019"] += 2
    recommendations["Roches de Provence Rose 2019"] += 2
    recommendations["Summer Water Rose 2019"] += 2
    recommendations["Domaine Chantepierre Tavel Rose 2019"] += 2
    recommendations["19 Crimes Snoop Cali Rosé"] += 2
    recommendations["Ravines Dry Riesling Finger Lakes 2016"] += 3
    recommendations["Stella Rosa Moscato d'Asti"] += 3
    recommendations["Michele Chiarlo Moscato d'Asti Nivole 2019"] += 3
    recommendations["Cline Zinfandel Ancient Vines 2018"] += 3
    recommendations["Angeline Pinot Noir Reserve 2019"] += 4
    recommendations["J. Lohr Los Osos Merlot 2018"] += 4
    recommendations["Cycles Gladiator Merlot 2018"] += 4
    recommendations["The Big Red Monster Cabernet Sauvignon"] += 5
    recommendations["Andrew Murray Vineyards Syrah Tous les Jours 2017"] += 5
    recommendations["Aviary Birds of Prey Red Blend 2018"] += 5

# 5. If you were drinking wine with a meal, what types of food would you eat?
def q5(recommendations, response):
    if response == "Steak, lamb, beef, pork": 
        # drink red wines
        recommendations["Angeline Pinot Noir Reserve 2019"] += 3
        recommendations["The Big Red Monster Cabernet Sauvignon"] += 3
        recommendations["Cline Zinfandel Ancient Vines 2018"] += 3
        recommendations["Andrew Murray Vineyards Syrah Tous les "] += 3
        recommendations["Jours 2017"] += 3
        recommendations["Aviary Birds of Prey Red Blend 2018"] += 3
        recommendations["J. Lohr Los Osos Merlot 2018"] += 3
        recommendations["Cycles Gladiator Merlot 2018"] += 3

    elif response == "Chicken, poultry":
        # drink roses
        recommendations["Chateau d’Esclans Whispering Angel Rose 2019"] += 3
        recommendations["Mateus Dry Rose 2019"] += 3
        recommendations["Roches de Provence Rose 2019"] += 3
        recommendations["Summer Water Rose 2019"] += 3
        recommendations["Domaine Chantepierre Tavel Rose 2019"] += 3
        recommendations["19 Crimes Snoop Cali Rosé"] += 3
    
    elif response == "Seafood or shellfish":
        # drink white wines
        recommendations["Acrobat Pinot Gris 2018"] += 3
        recommendations["Ravines Dry Riesling Finger Lakes 2016"] += 3
        recommendations["Colome Torrontes 2017"] += 3
        recommendations["Susana Balbo Crios Torrontes 2018"] += 3
        recommendations["Stella Rosa Moscato d'Asti"] += 3
        recommendations["DeLoach Heritage Reserve Chardonnay 2019"] += 3
        recommendations["Michele Chiarlo Moscato d'Asti Nivole 2019"] += 3
    
    elif response == "Greasy":
        recommendations["Cline Zinfandel Ancient Vines 2018"] += 1
        recommendations["Michele Chiarlo Moscato d'Asti Nivole 2019"] += 1
        recommendations["Stella Rosa Moscato d'Asti"] += 1
        recommendations["Ravines Dry Riesling Finger Lakes 2016"] += 1
        recommendations["J. Lohr Los Osos Merlot 2018"] += 2
        recommendations["Cycles Gladiator Merlot 2018"] += 2
        recommendations["Angeline Pinot Noir Reserve 2019"] += 2
        recommendations["Aviary Birds of Prey Red Blend 2018"] += 3
        recommendations["The Big Red Monster Cabernet Sauvignon"] += 3
        recommendations["Andrew Murray Vineyards Syrah Tous les Jours 2017"] += 3


# 6. What quality of wine are you looking for? (skipped)
# 7. What type of wine are you looking for? 
def q7(recommendations, response):
    if response == 'Red':
        recommendations["Angeline Pinot Noir Reserve 2019"] += 3
        recommendations["The Big Red Monster Cabernet Sauvignon"] += 3
        recommendations["Cline Zinfandel Ancient Vines 2018"] += 3
        recommendations["Andrew Murray Vineyards Syrah Tous les "] += 3
        recommendations["Jours 2017"] += 3
        recommendations["Aviary Birds of Prey Red Blend 2018"] += 3
        recommendations["J. Lohr Los Osos Merlot 2018"] += 3
        recommendations["Cycles Gladiator Merlot 2018"] += 3

    if response == 'White':
        recommendations["Acrobat Pinot Gris 2018"] += 3
        recommendations["Ravines Dry Riesling Finger Lakes 2016"] += 3
        recommendations["Colome Torrontes 2017"] += 3
        recommendations["Susana Balbo Crios Torrontes 2018"] += 3
        recommendations["Stella Rosa Moscato d'Asti"] += 3
        recommendations["DeLoach Heritage Reserve Chardonnay 2019"] += 3
        recommendations["Michele Chiarlo Moscato d'Asti Nivole 2019"] += 3
    
    if response == 'Rosé':
        recommendations["Chateau d’Esclans Whispering Angel Rose 2019"] += 3
        recommendations["Mateus Dry Rose 2019"] += 3
        recommendations["Roches de Provence Rose 2019"] += 3
        recommendations["Summer Water Rose 2019"] += 3
        recommendations["Domaine Chantepierre Tavel Rose 2019"] += 3
        recommendations["19 Crimes Snoop Cali Rosé"] += 3



def calculateExpertRec(filename, outputFile):
    with open(filename) as f:
        data = json.load(f)

    recommendations = defaultdict(int)
    q1(recommendations)
    q2(recommendations, ' '.join(data[0]['Activities']))
    q3(recommendations, data[0]['Cost'])
    q4(recommendations)
    q5(recommendations, data[0]['Meal'])
    q7(recommendations, data[0]['Color'])

    wineRecs = []
    for k, v in recommendations.items():
        wineRecs.append([k,v])

    wineRecs = sorted(wineRecs, key=lambda x: x[1], reverse=True)
    outputs = [wineRecs[0][0], wineRecs[1][0], wineRecs[2][0], wineRecs[3][0]]

    f = open(outputFile, "w")
    f.write(str(outputs))
    f.close()

def main():
    filename = sys.argv[1]
    outputFileName = sys.argv[2]
    # getAIRecommendedWines(filename, outputFileName)
    calculateExpertRec(filename, outputFileName)

main()

