import Discord from "discord.js";
import fs from "fs";

import config from "../data/config.json";
import { getSupply, parseDecimals, getConfig } from "../util/economy-blockchain.js";
const { coinName, ticker, maxsupply, blockreward, currency, decimals, txfee } = config;

export const name = "info";
export const description = `Get info about ${ticker}`;

export const execute = (message,args) => {
	message.channel.send(getInfo());
};

const getInfo = () => {
	let config = getConfig();

	let exchangerate = config.exchangerate;
	let marketcap = maxsupply*exchangerate;
	let supply = getSupply();

    const infoEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`${coinName} (${ticker})`)
		//.setURL('')s
		//.setAuthor('Santeeisweird9')
		.setDescription(`Exchange and transfer ${coinName}!`)
		//.setThumbnail('')
		.addFields(
			{ name: 'Max Supply', value: `${maxsupply}` },
			{ name: 'Exchange Rate', value: `1 ${ticker} for ${exchangerate} ${currency}.\n1 ${currency} for ${parseDecimals(1/exchangerate)} ${ticker}.` },
			{ name: 'Current Supply', value: `${supply}`, inline: true },
			{ name: 'Block Reward', value: `${blockreward}`, inline: true },
  	 		{ name: 'Market Cap', value: `${marketcap} ${currency}`},
  		  	{ name: 'Fully Diluted Market Cap', value: `${exchangerate*maxsupply} ${currency}`},
   			{ name: 'Transaction (TX) Fee', value: `${txfee}`},
    		{ name: 'Data', value: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxUPmNczrjFQu-XTxVYGKh65KMoUc_JllrbJ1LUaBPY0NwlvBDEfHg01oZ2OQM-Eoq1aMYTmsmwFUa/pubchart?oid=486439618&format=interactive'}
		)
		//.addField('', '', true)
		//.setImage('')
		.setTimestamp()
		.setFooter(`${coinName} (${ticker})`, ''); // TODO: set url as second arg
	return infoEmbed;
}