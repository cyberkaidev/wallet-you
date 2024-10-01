import { useRoute } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";

import { useFormatDate } from "~/application/hooks/useFormatDate";
import { ScrollView } from "~/presentation/components/ScrollView";
import { UseRouteType } from "~/shared/Navigation";

import { LimitedWidthContainer } from "../components/LimitedWidthContainer";
import { TitleSubtitle } from "../components/TitleSubtitle";
import { spaces } from "../settings/themes";

export function TransactionPage() {
	const {
		params: { data },
	} = useRoute<UseRouteType<"TransactionPage">>();
	const { t } = useTranslation();

	const time = useFormatDate(new Date(data.timestamp * 1000));

	const transactionsData = [
		{
			title: data.transactionType === "incoming" ? t("received") : t("sent"),
			subTitle: data.amount,
		},
		{ title: t("date"), subTitle: time.date },
		{ title: t("hour"), subTitle: time.time },
		{ title: "Hash", subTitle: data.hash },
		{
			title: t("block-number"),
			subTitle: data.blockNumber ? data.blockNumber.toString() : "-",
		},
	];

	return (
		<ScrollView>
			{transactionsData.map((item, index) => (
				<LimitedWidthContainer key={index}>
					<TitleSubtitle title={item.title} subTitle={item.subTitle} marginB={spaces.vertical.m} />
				</LimitedWidthContainer>
			))}
		</ScrollView>
	);
}
