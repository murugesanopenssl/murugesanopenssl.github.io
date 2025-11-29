function reloadPageWithoutCookies()
{
	const docFrag = document.createDocumentFragment();
	const clone = document.body.cloneNode(true);
	docFrag.appendChild(clone);
	document.body.innerHTML = '';
	document.body.appendChild(docFrag);
}
window.addEventListener('load', reloadPageWithoutCookies);
MenuHeight="600px";
MenuHeight_HomePage01="78px";
MenuHeight_HealthTips="141px";
MenuWidth_HealthTips="270px";
MenuHeight_MoneyHelp01="541px";
MenuWidth_MoneyHelp01="251px";
MenuHeight_MoneyHelp02="500px";
MenuHeight_MoneyHelp03="484px";
MenuHeight_MoneyHelp04="484px";
MenuHeight_MoneyHelp05="546px";
MenuHeight_SBI_employee_never_help01="42px";
MenuWidth_SBI_employee_never_help01="195px";
MenuHeight_WindowsHelp01="218px";
MenuWidth_WindowsHelp01="227px";
MenuHeight_Myself01="344px";
MenuWidth_Myself01="258px";
MenuHeight_PrivacyPolicy01="325px";
MenuWidth_PrivacyPolicy01="263px";
MenuHeight_MyPredict01="133px";
MenuWidth_MyPredict01="175px";
MenuHeight_AadhaarHelp01="143px";
MenuHeight_Garbages01="593px";
MenuWidth="158px";
DefaultVal=1;
function DISPLAY_REQUIRED_POSTOFFICE_INTEREST( selectedVal )
{
	var CurrentThirukkuralName = location.href.split("/").slice(-1);
	if( 'undefined' == typeof selectedVal )
	{
	}
	else
	{
		DefaultVal=selectedVal;
	}
	if( document.getElementById("thirukkural_id") )
	{
		TABLENAME = document.getElementById("thirukkural_id").value;
		formObj = document.getElementById("thirukkural_id");
		if( 1 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_001_kadavuL_vaazhthu.html');
			formObj.leaveCode[TABLENAME].selected = true;
		}
		else if( 2 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_002_vaan_siRappu.html');
			formObj.leaveCode[TABLENAME-1].selected = false;
			formObj.leaveCode[TABLENAME].selected = true;
			formObj.leaveCode[TABLENAME+1].selected = false;
		}
		else if( 3 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_003_neethaar_perumai.html');
			formObj.leaveCode[TABLENAME-1].selected = false;
			formObj.leaveCode[TABLENAME].selected = true;
			formObj.leaveCode[TABLENAME+1].selected = false;
		}
		else if( 4 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_004_aRan_valiyuRuthal.html');
			formObj.leaveCode[TABLENAME-1].selected = false;
			formObj.leaveCode[TABLENAME].selected = true;
			formObj.leaveCode[TABLENAME+1].selected = false;
		}
		else if( 5 == TABLENAME )
		{
			var url = window.location.toString();
			if( 'undefined' != typeof formObj.leaveCode )
			{
				formObj.leaveCode[TABLENAME-1].selected = false;
				formObj.leaveCode[TABLENAME].selected = true;
				formObj.leaveCode[TABLENAME+1].selected = false;
			}
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_005_ilVaazhkkai.html');
		}
		else if( 6 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_006_vaazhkkaith_thuNainalam.html');
		}
		else if( 7 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_007_makkatpeRu.html');
		}
		else if( 8 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_008_anbudaimai.html');
		}
		else if( 9 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_009_virundhoembal.html');
		}
		else if( 10 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_010_iniyavai_kooRal.html');
		}
		else if( 11 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_011_sein_nanRi_aridhal.html');
		}
		else if( 12 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_012_naduvu_nilaimai.html');
		}
		else if( 13 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_013_adakkam_udaimai.html');
		}
		else if( 14 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_014_ozhukkam_udaimai.html');
		}
		else if( 15 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_015_piran_il_vizhaiyaamai.html');
		}
		else if( 16 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_016_poRai_udaimai.html');
		}
		else if( 17 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_017_azhukkaaRaamai.html');
		}
		else if( 18 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_018_veggaamai.html');
		}
		else if( 19 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_019_puRankooRaamai.html');
		}
		else if( 20 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_020_payanila_sollaamai.html');
		}
		else if( 21 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_021_theevinai_achcham.html');
		}
		else if( 22 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_022_oppuravu_aridhal.html');
		}
		else if( 23 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_023_eegai.html');
		}
		else if( 24 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_024_pughazh.html');
		}
		else if( 25 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_025_aruL_udaimai.html');
		}
		else if( 26 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_026_pulaal_maRuthal.html');
		}
		else if( 27 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_027_thavam.html');
		}
		else if( 28 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_028_kooda_ozhukkam.html');
		}
		else if( 29 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_029_kaLLaamai.html');
		}
		else if( 30 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_030_vaaimai.html');
		}
		else if( 31 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_031_vegulaamai.html');
		}
		else if( 32 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_032_innaa_seiyaamai.html');
		}
		else if( 33 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_033_kollaamai.html');
		}
		else if( 34 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_034_nilaiyaamai.html');
		}
		else if( 35 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_035_thuRavu.html');
		}
		else if( 36 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_036_mei_uNardhal.html');
		}
		else if( 37 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_037_avaa_aRuththal.html');
		}
		else if( 38 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_038_oozh.html');
		}
		else if( 39 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_039_iRai_maatchi.html');
		}
		else if( 40 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_040_kalvi.html');
		}
		else if( 41 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_041_kallaamai.html');
		}
		else if( 42 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_042_kaeLvi.html');
		}
		else if( 43 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_043_aRivudaimai.html');
		}
		else if( 44 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_044_kuTRam_kadidhal.html');
		}
		else if( 45 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_045_periyaaraith_thuNaiKodal.html');
		}
		else if( 46 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_046_sitRinam_saeraamai.html');
		}
		else if( 47 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_047_therindhu_seyalvagai.html');
		}
		else if( 48 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_048_vali_aRidhal.html');
		}
		else if( 49 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_049_kaalam_aRidhal.html');
		}
		else if( 50 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_050_idan_aRidhal.html');
		}
		else if( 51 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_051_therindhu_theLidhal.html');
		}
		else if( 52 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_052_therindhu_vinaiyaadal.html');
		}
		else if( 53 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_053_sutRam_thazhalaal.html');
		}
		else if( 54 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_054_pochchaavaamai.html');
		}
		else if( 55 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_055_sengoenmai.html');
		}
		else if( 56 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_056_kodungoenmai.html');
		}
		else if( 57 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_057_veruvandha_seiyaamai.html');
		}
		else if( 58 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_058_kaNNottam.html');
		}
		else if( 59 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_059_otRaadal.html');
		}
		else if( 60 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_060_ookkam_udaimai.html');
		}
		else if( 61 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_061_madi_inmai.html');
		}
		else if( 62 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_062_aaLvinai_udaimai.html');
		}
		else if( 63 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_063_idukkaN_azhiyaamai.html');
		}
		else if( 64 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_064_amaichu.html');
		}
		else if( 65 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_065_solvanmai.html');
		}
		else if( 66 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_066_vinaiththooimai.html');
		}
		else if( 67 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_067_vinaiththitpam.html');
		}
		else if( 68 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_068_vinay_seyalvagai.html');
		}
		else if( 69 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_069_thoodhu.html');
		}
		else if( 70 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_070_mannaraich_chaerndhu_ozhugal.html');
		}
		else if( 71 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_071_kuRippu_aridhal.html');
		}
		else if( 72 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_072_avai_aRidhal.html');
		}
		else if( 73 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_073_avai_anjaamai.html');
		}
		else if( 74 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_074_naadu.html');
		}
		else if( 75 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_075_araN.html');
		}
		else if( 76 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_076_poruL_seyalvagai.html');
		}
		else if( 77 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_077_padai_maatchi.html');
		}
		else if( 78 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_078_padai_cherukku.html');
		}
		else if( 79 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_079_natpu.html');
		}
		else if( 80 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_080_natpu_aaraaidhal.html');
		}
		else if( 81 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_081_pazhaimai.html');
		}
		else if( 82 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_082_thee_natpu.html');
		}
		else if( 83 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_083_koodaa_natpu.html');
		}
		else if( 84 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_084_paedhaimai.html');
		}
		else if( 85 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_085_pullaRivaaNmai.html');
		}
		else if( 86 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_086_igal.html');
		}
		else if( 87 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_087_pagai_maatchi.html');
		}
		else if( 88 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_088_pagaiththiram_theridhal.html');
		}
		else if( 89 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_089_utpagai.html');
		}
		else if( 90 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_090_periyaaraip_pizhaiyaamai.html');
		}
		else if( 91 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_091_peNvazhi_cheRal.html');
		}
		else if( 92 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_092_viraivil_magaLir.html');
		}
		else if( 93 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_093_kaL_uNNaamai.html');
		}
		else if( 94 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_094_soodhu.html');
		}
		else if( 95 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_095_marundhu.html');
		}
		else if( 96 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_096_kudimai.html');
		}
		else if( 97 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_097_maanam.html');
		}
		else if( 98 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_098_perumai.html');
		}
		else if( 99 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_099_saanRaaNmai.html');
		}
		else if( 100 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_100_paNbudaimai.html');
		}
		else if( 101 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_101_nanRiyil_selvam.html');
		}
		else if( 102 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_102_naaN_udaimai.html');
		}
		else if( 103 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_103_kudi_seyalvagai.html');
		}
		else if( 104 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_104_uzhavu.html');
		}
		else if( 105 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_105_nalguravu.html');
		}
		else if( 106 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_106_iravu.html');
		}
		else if( 107 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_107_iravachcham.html');
		}
		else if( 108 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_108_kayamai.html');
		}
		else if( 109 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_109_thagaiyaNangRuththal.html');
		}
		else if( 110 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_110_kuRippaRithal.html');
		}
		else if( 111 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_111_puNarchchi_magizhthal.html');
		}
		else if( 112 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_112_nalam_punaindhu_uraiththal.html');
		}
		else if( 113 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_113_kaadhaR_siRappu_uraiththal.html');
		}
		else if( 114 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_114_naaNunth_thuRavu_uraiththal.html');
		}
		else if( 115 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_115_alar_aRivuRuththal.html');
		}
		else if( 116 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_116_pirivaatRaamai.html');
		}
		else if( 117 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_117_padar_melindhu_irangal.html');
		}
		else if( 118 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_118_kaN_vidhuppu_azhidhal.html');
		}
		else if( 119 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_119_pasappu_uRu_paruvaral.html');
		}
		else if( 120 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_120_thanippadar_migudhi.html');
		}
		else if( 121 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_121_ninaindhavar_pulambal.html');
		}
		else if( 122 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_122_kanavu_nilai_uraiththal.html');
		}
		else if( 123 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_123_pozhuludhu_kaNdu_irangal.html');
		}
		else if( 124 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_124_uRuppu_nalan_azhidhal.html');
		}
		else if( 125 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_125_nenjodu_kiLaththal.html');
		}
		else if( 126 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_126_niRai_azhidhal.html');
		}
		else if( 127 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_127_avar_vayin_vidhumbal.html');
		}
		else if( 128 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_128_kuRippu_aRivuRaththal.html');
		}
		else if( 129 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_129_puNarchchi_vidhumbal.html');
		}
		else if( 130 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_130_nenjodu_pulaththal.html');
		}
		else if( 131 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_131_pulavi.html');
		}
		else if( 132 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_132_pulavi_nuNakkam.html');
		}
		else if( 133 == TABLENAME )
		{
			var url = window.location.toString();
			window.location.href = url.replace( CurrentThirukkuralName, 'thirukkural_133_oodal_uvagai.html');
		}
	}
}
function isString(o)
{
	return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}
function sortTable(ColNum)
{
	var table, rows, switching, i, x, y, shouldSwitch;
	if( document.getElementById("myTable") )
	{
		table = document.getElementById("myTable");
		switching = true;
		/*Make a loop that will continue until
		no switching has been done:*/
		while (switching)
		{
			//start by saying: no switching is done:
			switching = false;
			rows = table.rows;
			/*Loop through all table rows (except the
			first, which contains table headers):*/
			PREVIOUS_MSG="";
			PREVIOUS_TAG="";
			for (i = 1; i < (rows.length - 1); i++)
			{
				//start by saying there should be no switching:
				shouldSwitch = false;
				/*Get the two elements you want to compare,
				one from current row and one from the next:*/
				x = rows[i].getElementsByTagName("TD")[ColNum];
				y = rows[i + 1].getElementsByTagName("TD")[ColNum];
				//check if the two rows should switch place:
				if( "00.00" == x.innerHTML )
				{
					PREVIOUS_TAG=x;
					PREVIOUS_MSG=x.innerHTML="0.00";
				}
				if( isString(x.innerHTML) )
				{
					if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
					{
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
				else
				{
					if(x.innerHTML > y.innerHTML )
					{
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
			}
			if( "" != PREVIOUS_MSG )
			{
				PREVIOUS_TAG.innerHTML="00.00";
			}
			if(shouldSwitch)
			{
				/*If a switch has been marked, make the switch
				and mark that a switch has been done:*/
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
			}
		}
	}
}
function isString(o)
{
	return typeof o == "string" || (typeof o == "object" && o.constructor === String);
}
function sortTable(ColNum)
{
	var table, rows, switching, i, x, y, shouldSwitch;
	if( document.getElementById("myTable") )
	{
		table = document.getElementById("myTable");
		switching = true;
		/*Make a loop that will continue until
		no switching has been done:*/
		while (switching)
		{
			//start by saying: no switching is done:
			switching = false;
			rows = table.rows;
			/*Loop through all table rows (except the
			first, which contains table headers):*/
			PREVIOUS_MSG="";
			PREVIOUS_TAG="";
			for (i = 1; i < (rows.length - 1); i++)
			{
				//start by saying there should be no switching:
				shouldSwitch = false;
				/*Get the two elements you want to compare,
				one from current row and one from the next:*/
				x = rows[i].getElementsByTagName("TD")[ColNum];
				y = rows[i + 1].getElementsByTagName("TD")[ColNum];
				//check if the two rows should switch place:
				if( "00.00" == x.innerHTML )
				{
					PREVIOUS_TAG=x;
					PREVIOUS_MSG=x.innerHTML="0.00";
				}
				if( isString(x.innerHTML) )
				{
					if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
					{
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
				else
				{
					if(x.innerHTML > y.innerHTML )
					{
						//if so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
			}
			if( "" != PREVIOUS_MSG )
			{
				PREVIOUS_TAG.innerHTML="00.00";
			}
			if(shouldSwitch)
			{
				/*If a switch has been marked, make the switch
				and mark that a switch has been done:*/
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
			}
		}
	}
}
function WindowsHelp01()
{
	if( document.getElementById( "EntHealthId01" ) )
	{
		document.getElementById("EntHealthId01").style.height = "0";
		document.getElementById("EntHealthId01").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel01" ) )
	{
		document.getElementById("MoneyHelpPanel01").style.height = "0";
		document.getElementById("MoneyHelpPanel01").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel02" ) )
	{
		document.getElementById("MoneyHelpPanel02").style.height = "0";
		document.getElementById("MoneyHelpPanel02").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel03" ) )
	{
		document.getElementById("MoneyHelpPanel03").style.height = "0";
		document.getElementById("MoneyHelpPanel03").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel04" ) )
	{
		document.getElementById("MoneyHelpPanel04").style.height = "0";
		document.getElementById("MoneyHelpPanel04").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel05" ) )
	{
		document.getElementById("MoneyHelpPanel05").style.height = "0";
		document.getElementById("MoneyHelpPanel05").style.width = "0";
	}
	if( document.getElementById( "WindowsHelpPanel01" ) )
	{
		document.getElementById("WindowsHelpPanel01").style.height = MenuHeight_WindowsHelp01;
		document.getElementById("WindowsHelpPanel01").style.width = MenuWidth_WindowsHelp01;
	}
	if( document.getElementById( "MyselfPanel01" ) )
	{
		document.getElementById("MyselfPanel01").style.height = "0";
		document.getElementById("MyselfPanel01").style.width = "0";
	}
	if( document.getElementById( "PrivacyPolicyPanel01" ) )
	{
		document.getElementById("PrivacyPolicyPanel01").style.height = "0";
		document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	}
	if( document.getElementById( "MyPredictPanel01" ) )
	{
		document.getElementById("MyPredictPanel01").style.height = "0";
		document.getElementById("MyPredictPanel01").style.width = "0";
	}
	if( document.getElementById( "AadhaarHelpPanel01" ) )
	{
		document.getElementById("AadhaarHelpPanel01").style.height = "0";
		document.getElementById("AadhaarHelpPanel01").style.width = "0";
	}
	if( document.getElementById( "GarbagesPanel01" ) )
	{
		document.getElementById("GarbagesPanel01").style.height = "0";
		document.getElementById("GarbagesPanel01").style.width = "0";
	}
	if( document.getElementById( "HomePanel" ) )
	{
		document.getElementById("HomePanel").style.height = "0";
		document.getElementById("HomePanel").style.width = "0";
	}
	if( document.getElementById( "SBI_employee_never_helpPanel01" ) )
	{
		document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
		document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	}
}
function PrivacyPolicy01()
{
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = MenuHeight_PrivacyPolicy01;
	document.getElementById("PrivacyPolicyPanel01").style.width = MenuWidth_PrivacyPolicy01;
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
}
function Myself01()
{
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = MenuHeight_Myself01;
	document.getElementById("MyselfPanel01").style.width = MenuWidth_Myself01;
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
}
function MyPredict01()
{
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = MenuHeight_MyPredict01;
	document.getElementById("MyPredictPanel01").style.width = MenuWidth_MyPredict01;
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
}
function AadhaarHelp01()
{
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = MenuHeight_AadhaarHelp01;
	document.getElementById("AadhaarHelpPanel01").style.width = MenuWidth;
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
}
function GarbagesHelp01()
{
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = MenuHeight_Garbages01;
	document.getElementById("GarbagesPanel01").style.width = MenuWidth;
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
}
function OpenHealthTips()
{
	CloseHomeMenu();
	document.getElementById("EntHealthId01").style.height = MenuHeight_HealthTips;
	document.getElementById("EntHealthId01").style.width = MenuWidth_HealthTips;
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
}
function OpenMoneyHelp01()
{
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = MenuHeight_MoneyHelp01;
	document.getElementById("MoneyHelpPanel01").style.width = MenuWidth_MoneyHelp01;
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
}
function OpenMoneyHelp02()
{
	document.getElementById("MoneyHelpPanel02").style.height = MenuHeight_MoneyHelp02;
	document.getElementById("MoneyHelpPanel02").style.width = MenuWidth;
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
}
function OpenMoneyHelp05()
{
	document.getElementById("MoneyHelpPanel05").style.height = MenuHeight_MoneyHelp05;
	document.getElementById("MoneyHelpPanel05").style.width = MenuWidth;
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
}
function OpenSBI_employee_never_help01()
{
	if( document.getElementById("SBI_employee_never_helpPanel01") )
	{
		document.getElementById("SBI_employee_never_helpPanel01").style.height = MenuHeight_SBI_employee_never_help01;
		document.getElementById("SBI_employee_never_helpPanel01").style.width = MenuWidth_SBI_employee_never_help01;
	}
	if( document.getElementById("HomePanel") )
	{
		document.getElementById("HomePanel").style.height = "0";
		document.getElementById("HomePanel").style.width = "0";
	}
	if( document.getElementById("EntHealthId01") )
	{
		document.getElementById("EntHealthId01").style.height = "0";
		document.getElementById("EntHealthId01").style.width = "0";
	}
	if( document.getElementById("MoneyHelpPanel01") )
	{
		document.getElementById("MoneyHelpPanel01").style.height = "0";
		document.getElementById("MoneyHelpPanel01").style.width = "0";
	}
	if( document.getElementById("MoneyHelpPanel02") )
	{
		document.getElementById("MoneyHelpPanel02").style.height = "0";
		document.getElementById("MoneyHelpPanel02").style.width = "0";
	}
	if( document.getElementById("MoneyHelpPanel03") )
	{
		document.getElementById("MoneyHelpPanel03").style.height = "0";
		document.getElementById("MoneyHelpPanel03").style.width = "0";
	}
	if( document.getElementById("MoneyHelpPanel04") )
	{
		document.getElementById("MoneyHelpPanel04").style.height = "0";
		document.getElementById("MoneyHelpPanel04").style.width = "0";
	}
	if( document.getElementById("MoneyHelpPanel05") )
	{
		document.getElementById("MoneyHelpPanel05").style.height = "0";
		document.getElementById("MoneyHelpPanel05").style.width = "0";
	}
	if( document.getElementById("GarbagesPanel01") )
	{
		document.getElementById("GarbagesPanel01").style.height = "0";
		document.getElementById("GarbagesPanel01").style.width = "0";
	}
	if( document.getElementById("WindowsHelpPanel01") )
	{
		document.getElementById("WindowsHelpPanel01").style.height = "0";
		document.getElementById("WindowsHelpPanel01").style.width = "0";
	}
	if( document.getElementById("MyselfPanel01") )
	{
		document.getElementById("MyselfPanel01").style.height = "0";
		document.getElementById("MyselfPanel01").style.width = "0";
	}
	if( document.getElementById("PrivacyPolicyPanel01") )
	{
		document.getElementById("PrivacyPolicyPanel01").style.height = "0";
		document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	}
	if( document.getElementById("AadhaarHelpPanel01") )
	{
		document.getElementById("AadhaarHelpPanel01").style.height = "0";
		document.getElementById("AadhaarHelpPanel01").style.width = "0";
	}
	if( document.getElementById("MyPredictPanel01") )
	{
		document.getElementById("MyPredictPanel01").style.height = "0";
		document.getElementById("MyPredictPanel01").style.width = "0";
	}
}
function OpenMoneyHelp04()
{
	document.getElementById("MoneyHelpPanel04").style.height = MenuHeight_MoneyHelp04;
	document.getElementById("MoneyHelpPanel04").style.width = MenuWidth;
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
}
function OpenMoneyHelp03()
{
	document.getElementById("MoneyHelpPanel03").style.height = MenuHeight_MoneyHelp03;
	document.getElementById("MoneyHelpPanel03").style.width = MenuWidth;
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
}
function hideMenu( menuName )
{
}
function OpenHomeMenu()
{
	document.getElementById("HomePanel").style.height = MenuHeight_HomePage01;
	document.getElementById("HomePanel").style.width = MenuWidth;
	document.getElementById("HomePanel").style.position = "0";
	document.getElementById("HomePanel").style.zIndex = "0";	
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	toggleTable(event);
}
function toggleTable()
{
	const homeLink = document.getElementById('Homehref');
	const preventLink = document.getElementById('PreventWastagehref');
	const homeTable = document.getElementById('HomeTable');
	const preventWastage = document.getElementById('PreventWastage');
	const categoryAmount = document.getElementById('CategoryAmountDetailsTab');
	const clickedId = event.target.id;
	if( clickedId === 'Homehref')
	{
		if( homeTable.style.display === 'none' || homeTable.style.display === '') {
		homeTable.style.display = 'table';
		categoryAmount.style.display = 'none';
		preventWastage.style.display = 'none';
		} else {
		homeTable.style.display = 'none';
		categoryAmount.style.display = 'table';
		preventWastage.style.display = 'none';
		}
	}
	else if( clickedId === 'PreventWastagehref')
	{
		if (preventWastage.style.display === 'none' || preventWastage.style.display === '')
		{
			preventWastage.style.display = 'table';
			preventLink.style.removeProperty("color");
			preventLink.style.setProperty("color", "orange", "important");
			categoryAmount.style.display = 'none';
			homeTable.style.display = 'none';
		}
		else
		{
			preventWastage.style.display = 'none';
			preventLink.style.removeProperty("color");
			preventLink.style.setProperty("color", "blue", "important");
			// alert(preventLink.style.color);
			categoryAmount.style.display = 'table';
			homeTable.style.display = 'none';
		}
	}
}
function CloseHomeMenu()
{
	if( document.getElementById( "GarbagesPanel01" ) )
	{
		document.getElementById("GarbagesPanel01").style.height = "0";
		document.getElementById("GarbagesPanel01").style.width = "0";
	}
	if( document.getElementById( "WindowsHelpPanel01" ) )
	{
		document.getElementById("WindowsHelpPanel01").style.height = "0";
		document.getElementById("WindowsHelpPanel01").style.width = "0";
	}
	if( document.getElementById( "MyselfPanel01" ) )
	{
		document.getElementById("MyselfPanel01").style.height = "0";
		document.getElementById("MyselfPanel01").style.width = "0";
	}
	if( document.getElementById( "PrivacyPolicyPanel01" ) )
	{
		document.getElementById("PrivacyPolicyPanel01").style.height = "0";
		document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	}
	if( document.getElementById( "AadhaarHelpPanel01" ) )
	{
		document.getElementById("AadhaarHelpPanel01").style.height = "0";
		document.getElementById("AadhaarHelpPanel01").style.width = "0";
	}
	if( document.getElementById( "MyPredictPanel01" ) )
	{
		document.getElementById("MyPredictPanel01").style.height = "0";
		document.getElementById("MyPredictPanel01").style.width = "0";
	}
	if( document.getElementById( "HomePanel" ) )
	{
		document.getElementById("HomePanel").style.height = "0";
		document.getElementById("HomePanel").style.width = "0";
	}
	if( document.getElementById( "EntHealthId01" ) )
	{
		document.getElementById("EntHealthId01").style.height = "0";
		document.getElementById("EntHealthId01").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel01" ) )
	{
		document.getElementById("MoneyHelpPanel01").style.width = "0";
		document.getElementById("MoneyHelpPanel01").style.height = "0";
	}
	if( document.getElementById( "MoneyHelpPanel02" ) )
	{
		document.getElementById("MoneyHelpPanel02").style.height = "0";
		document.getElementById("MoneyHelpPanel02").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel03" ) )
	{
		document.getElementById("MoneyHelpPanel03").style.height = "0";
		document.getElementById("MoneyHelpPanel03").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel04" ) )
	{
		document.getElementById("MoneyHelpPanel04").style.height = "0";
		document.getElementById("MoneyHelpPanel04").style.width = "0";
	}
	if( document.getElementById( "MoneyHelpPanel05" ) )
	{
		document.getElementById("MoneyHelpPanel05").style.height = "0";
		document.getElementById("MoneyHelpPanel05").style.width = "0";
	}
	if( document.getElementById( "SBI_employee_never_helpPanel01" ) )
	{
		document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
		document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
	}
}
function CloseMoneyHelp()
{
	document.getElementById("GarbagesPanel01").style.height = "0";
	document.getElementById("GarbagesPanel01").style.width = "0";
	document.getElementById("WindowsHelpPanel01").style.height = "0";
	document.getElementById("WindowsHelpPanel01").style.width = "0";
	document.getElementById("MyselfPanel01").style.height = "0";
	document.getElementById("MyselfPanel01").style.width = "0";
	document.getElementById("PrivacyPolicyPanel01").style.height = "0";
	document.getElementById("PrivacyPolicyPanel01").style.width = "0";
	document.getElementById("AadhaarHelpPanel01").style.height = "0";
	document.getElementById("AadhaarHelpPanel01").style.width = "0";
	document.getElementById("MyPredictPanel01").style.height = "0";
	document.getElementById("MyPredictPanel01").style.width = "0";
	document.getElementById("HomePanel").style.height = "0";
	document.getElementById("HomePanel").style.width = "0";
	document.getElementById("EntHealthId01").style.height = "0";
	document.getElementById("EntHealthId01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.width = "0";
	document.getElementById("MoneyHelpPanel01").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.height = "0";
	document.getElementById("MoneyHelpPanel02").style.width = "0";
	document.getElementById("MoneyHelpPanel03").style.height = "0";
	document.getElementById("MoneyHelpPanel03").style.width = "0";
	document.getElementById("MoneyHelpPanel04").style.height = "0";
	document.getElementById("MoneyHelpPanel04").style.width = "0";
	document.getElementById("MoneyHelpPanel05").style.height = "0";
	document.getElementById("MoneyHelpPanel05").style.width = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.height = "0";
	document.getElementById("SBI_employee_never_helpPanel01").style.width = "0";
}
location_url=window.location.href;
const urlExcludingPageName = window.location.protocol + "//" + window.location.host + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
if( "https://geocities.ws/murugesan" == urlExcludingPageName )
{
	location_url=window.location.href="https://www.geocities.ws/murugesan"+location.pathname;
}
if( "https://geocities.ws/murugesan/murugesan" == urlExcludingPageName )
{
	location_url=window.location.href="https://www.geocities.ws"+location.pathname;
}
if( location_url == "https://geocities.ws/murugesan/" )
{
		location_url=window.location.href="https://www.geocities.ws/murugesan/index.htm";
}
if( location_url == "https://geocities.ws/murugesan/Gold-seller-comparison.html" )
{
		location_url=window.location.href="https://www.geocities.ws/murugesan/Gold-seller-comparison.html"
}
if( location_url == "https://geocities.ws/murugesan/earth_politics_or_general_age.html" )
{
		location_url=window.location.href="https://www.geocities.ws/murugesan/earth_politics_or_general_age.html"
}
if( location_url == "https://geocities.ws/murugesan/Disp-all-gdp.html" )
{
		location_url=window.location.href="https://www.geocities.ws/murugesan/Disp-all-gdp.html"
}
Myprofile_url=location_url.indexOf( "NMurugesan_cv.html");
index_url=location_url.indexOf( "index.html");
if( -1 == index_url)
{
	if(	location_url == "https://geocities.ws/murugesan/" || location_url == "http://geocities.ws/murugesan/" || location_url == "https://geocities.ws/murugesan" || location_url == "http://geocities.ws/murugesan" || location_url == "https://www.geocities.ws/murugesan/" || location_url == "http://www.geocities.ws/murugesan/" || location_url == "https://geocities.ws/murugesan/index.html" || location_url == "http://geocities.ws/murugesan/index.html" || location_url == "https://www.geocities.ws/murugesan/index.html" || location_url == "http://www.geocities.ws/murugesan/index.html" || location_url == "https://geocities.ws/murugesan/index.htm" || location_url == "http://geocities.ws/murugesan/index.htm" || location_url == "https://www.geocities.ws/murugesan/index.htm" || location_url == "http://www.geocities.ws/murugesan/index.htm" )
	{
		index_url=12;
	}
}
Achievement_url=location_url.indexOf( "murugesan_achievements.html");
insidePoem="no";
prefix_poemDir="";
if(index_url)
{
	if( -1 != location_url.indexOf( "poem") )
	{
		insidePoem="yes";
		prefix_poemDir="../";
		index_url=location_url.indexOf( "Subfolderpoems");
	}
	else
	{
		insidePoem="no";
		prefix_poemDir="";
	}
}
HomePage_url=location_url.indexOf( "index.html");
NMurugesan_cv_url=location_url.indexOf( "NMurugesan_cv");
Appreciation_Evidence_url=location_url.indexOf( "Appreciation_Evidence.html");
exercise_at_home_url=location_url.indexOf( "exercise_at_home.html");
thirukkural_001_kadavuL_vaazhthu_url=location_url.indexOf( "thirukkural");
poems_url=location_url.indexOf( "poem");
Srinivasan_Ramanujan_Summation_url=location_url.indexOf( "Srinivasan_Ramanujan_Summation.html");
Earth_Mathematics_Pre_kg_url=location_url.indexOf( "Earth-Mathematics-Pre-kg.html");
openssl_speed_url=location_url.indexOf( "openssl_speed.html");
Health_tips_url=location_url.indexOf( "Health-tips.html");
do_not_waste_money_url=location_url.indexOf( "do_not_waste_money");
AIBEX_mobile_cover_seller_amazon_url=location_url.indexOf( "AIBEX_mobile_cover_seller_amazon");
HowToEarnMoney_url=location_url.indexOf( "HowToEarnMoney.html");
DNC_Chit_fund_url=location_url.indexOf( "DNC_Chit_fund.html");
SBI_ATM_CARD_SERVICE_CHARGES_url=location_url.indexOf( "SBI_ATM_CARD_SERVICE_CHARGES.html");
BSNLBetterThanPrivate_url=location_url.indexOf( "bsnl_airtel_jio.html");
SBIAtmUsage_url=location_url.indexOf( "SBIAtmUsage.html");
mis_interest_url=location_url.indexOf( "Sustainable_Living.html");
inhale_hotwater_ent_url=location_url.indexOf( "Sustainable_Living.html");
ppf_url=location_url.indexOf( "ppf");
shared_mkt_mis_url=location_url.indexOf( "shared-market-mis-compare.html");
MIS_INTEREST_EARLIER_INTERNET_BANKING_ERROR_url=location_url.indexOf( "MIS_INTEREST_EARLIER_INTERNET_BANKING_ERROR.html");
MIS_ONLINE_EXCEPTION_url=location_url.indexOf( "MIS_ONLINE_EXCEPTION.html");
THIRUMOOLAR_MIS_EXAMPLE_url=location_url.indexOf( "THIRUMOOLAR-MIS-EXAMPLE");
nsc_interest_url=location_url.indexOf( "nsc_interest");
closing_nsc_online_url=location_url.indexOf( "closing-nsc-online");
term_deposit_url=location_url.indexOf( "term_deposit.html");
sbi_login_error_url=location_url.indexOf( "sbi-login-error");
mobile_charge_alarm_url=location_url.indexOf( "mobile_charge_alarm");
LEARN_SBI_FD_url=location_url.indexOf( "LEARN_SBI_FD.html");
BEST_BANK_TO_OPEN_FD_url=location_url.indexOf( "BEST_BANK_TO_OPEN_FD.html");
Post_office_PPF_deposit_url=location_url.indexOf( "Post_office_PPF_deposit.html");
BNK_CREDIT_INTEREST_url=location_url.indexOf( "BNK_CREDIT_INTEREST.html");
Donate_url=location_url.indexOf( "Donate.html");
mydonation_url=location_url.indexOf( "mydonation.html");
MyVote_Url=location_url.indexOf( "My_upvote.html");
Karnataka_CurrentBill_url=location_url.indexOf( "Karnataka_CurrentBill.html");
Tamilnadu_CurrentBill_url=location_url.indexOf( "Tamilnadu_CurrentBill.html");
STEPS_TO_OPEN_SBI_ETDR_url=location_url.indexOf( "how-open-sbi-etdr");
SBI_ETDR_INTEREST_url=location_url.indexOf( "SBI_ETDR_INTEREST.html");
if( -1 == SBI_ETDR_INTEREST_url )
{
	Each_Sub_Sbi_Etdr_url = location_url.indexOf( "SBI_ETDR_");
}
else
{
	Each_Sub_Sbi_Etdr_url = -1;
}
TMB_ETDR_INTEREST_url=location_url.indexOf( "TMB_ETDR_INTEREST.html");
TMB_ETDR_INT_url=location_url.indexOf( "TMB_ETDR_INT");
FixedDepositComparisonBanks_url=location_url.indexOf( "FixedDepositComparisonBanks.html");
Indane_gas_ippb_url=location_url.indexOf( "Indane-gas-ippb.html");
ippb_url=location_url.indexOf( "ippb.html");
BuyerAction_url=location_url.indexOf( "BuyerAction.html");
TWO_WHEELER_INSURANCE_url=location_url.indexOf( "2WHEELER_INSURANCE.html");
SANI_MUTHU_CALENDAR_url=location_url.indexOf( "SANI_MUTHU_CALENDAR.html");
PreventMoney_Wastage_url=location_url.indexOf( "PreventMoney_Wastage.html");
IPPB_Transfer_money_url=location_url.indexOf( "IPPB_Transfer_money.html");
BIDARAGUPPA_GARBAGE_DUMPING_url=location_url.indexOf( "BIDARAGUPPA-GARBAGE-DUMPING.html");
SMS_Hackers_url=location_url.indexOf( "SMS_Hackers.html");
BlockWebSite_url=location_url.indexOf( "BlockWebSite.html");
NEWS_emails_url=location_url.indexOf( "NEWS_emails.html");
ISRO_emails_url=location_url.indexOf( "ISRO_emails.html");
NPS_emails_url=location_url.indexOf( "NPS_emails.html");
uninstall_mob_apps_url=location_url.indexOf( "uninstall_mob_apps.html");
GarbageEmail_url=location_url.indexOf( "GarbageEmail.html");
ITR_Refund_reissue_url=location_url.indexOf( "ITR_Refund_reissue");
HackUrlEmailNumSms_url=location_url.indexOf( "HackUrlEmailNumSms.html");
TNEB_ADD_AADHAAR_ONLINE_url=location_url.indexOf( "TNEB_ADD_AADHAAR_ONLINE.html");
Prediction_url=location_url.indexOf( "Prediction.html");
Prediction_01_url=location_url.indexOf( "Prediction_01.html");
SoapProductCountry_url=location_url.indexOf( "SoapProductCountry.html");
My_dream_at_universe_url=location_url.indexOf( "My_dream_at_universe.html");
DOWNLOAD_PAN_AADHAR_url=location_url.indexOf( "DOWNLOAD_PAN_AADHAR.html");
aadhaar_unlock_bio_metrics_url=location_url.indexOf( "aadhaar-unlock-bio-metrics.html");
UPDATE_AADHAR_WAIT_DAYS_url=location_url.indexOf( "UPDATE_AADHAR_WAIT_DAYS.html");
UserCountConnectedToBSNLNetwork_url=location_url.indexOf( "find_Number_Of_system_connected_to_bsnl.html");
MyProfileViewers_url=location_url.indexOf( "MyProfileViewers");
My_Drawings_url=location_url.indexOf( "My_Drawings");
if( -1 == My_Drawings_url )
{
	My_Drawings_url_01=location_url.indexOf( "eiffel-tower-9thstandard");
	if( -1 == My_Drawings_url_01 )
	{
		My_Drawings_url_02=location_url.indexOf( "china-wall-tower-9thstandard");
		if( -1 == My_Drawings_url_02 )
		{
			My_Drawings_url_03=location_url.indexOf( "pisa-tower-9thstandard");
			if( -1 == My_Drawings_url_03 )
			{
				My_Drawings_url_04=location_url.indexOf( "pyramid-9th-standard");
				if( -1 == My_Drawings_url_04 )
				{
					My_Drawings_url_05=location_url.indexOf( "tajmahal-9thstandard");
					if( -1 == My_Drawings_url_05 )
					{
						My_Drawings_url_06=location_url.indexOf( "india.html");
						if( -1 == My_Drawings_url_06 )
						{
							My_Drawings_url_07=location_url.indexOf( "tajmahal.html");
						}
					}
				}
			}
		}
	}
}
else
{
	My_Drawings_url_01 = -1;
	My_Drawings_url_02 = -1;
	My_Drawings_url_03 = -1;
	My_Drawings_url_04 = -1;
	My_Drawings_url_05 = -1;
	My_Drawings_url_06 = -1;
	My_Drawings_url_07 = -1;
}
murugesan_openssl_search_url=location_url.indexOf( "murugesan_openssl_search");
I_love_mathematics_url=location_url.indexOf( "I_love_mathematics");
TamilLetters_url=location_url.indexOf( "TamilLetters");
kannada_letters_url=location_url.indexOf( "kannada_letters");
Gold_seller_comparison_url=location_url.indexOf( "Gold-seller-comparison");
INDIAN_PM_url=location_url.indexOf( "INDIAN_PM");
Time_travel_knowledge_transfer_url=location_url.indexOf( "Time-travel-knowledge-transfer");
TAMILNADU_CM_url=location_url.indexOf( "TAMILNADU_CM");
KARNATAKA_CM_url=location_url.indexOf( "KARNATAKA_CM");
KnowledgeTransferAmount_url=location_url.indexOf( "KnowledgeTransferAmount");
privacy_url=location_url.indexOf( "privacy");
Politician_assets_url=location_url.indexOf( "Politician_assets");
NewsPolitics_url=location_url.indexOf( "NewsPolitics");
earth_politics_or_general_age_url=location_url.indexOf( "earth_politics_or_general_age");
if( -1 == earth_politics_or_general_age_url )
{
	earth_politics_or_general_age_url=location_url.indexOf( "Disp-all-gdp");
	if( -1 != earth_politics_or_general_age_url )
	{
		earth_politics_or_general_age_url=-2;
	}
}
Windows_ERR_HELP_url=location_url.indexOf( "Windows_ERR_HELP.html");
WindowsNetErrHelp_url=location_url.indexOf( "Windows_ERR_HELP.html");
if( -1 == WindowsNetErrHelp_url )
{
	WindowsNetErrHelp_url=location_url.indexOf( "cygwin_laptop_battery_alert");
}
Set_Unlimited_Windows_10_Network_url=location_url.indexOf( "Windows_ERR_HELP.html");
if( -1 == Set_Unlimited_Windows_10_Network_url )
{
	Set_Unlimited_Windows_10_Network_url=location_url.indexOf( "Set-Unlimited-Windows-10-Network");
}
windows_network_url=location_url.indexOf( "Windows_ERR_HELP.html");
if( -1 == windows_network_url )
{
	windows_network_url=location_url.indexOf( "windows-network");
}
spending_url=location_url.indexOf( "Sustainable_Living.html");
if( -1 == spending_url )
{
	spending_url=location_url.indexOf( "murugesan_page");
}
murugesan_openssl_url=location_url.indexOf( "murugesan_openssl.html");
if( -1 == murugesan_openssl_url )
{
	murugesan_openssl_url=location_url.indexOf( "murugesan_page");
}
Gregorian_calendar_url=location_url.indexOf( "Gregorian_calendar.html");
thunderbird_at_Windows_url=location_url.indexOf( "thunderbird_at_Windows.html");
Import_Eml_File_To_Thunderbird_url=location_url.indexOf( "Import_Eml_File_To_Thunderbird.html");
ThunderBird_All_Mail_Count_url=location_url.indexOf( "ThunderBird_All_Mail_Count.html");
Change_Default_SearchEngine_url=location_url.indexOf( "Change_Default_SearchEngine.html");
Windows_11_Patch_Worst_url=location_url.indexOf( "IDA14092023000.html");
GarbageNumbers_url=location_url.indexOf( "GarbageNumbers.html");
block_url_msedge_url=location_url.indexOf( "block_url_msedge.html");
StepsToUnlockSim_url=location_url.indexOf( "StepsToUnlockSim.html");
Karnataka_school_holidays_url=location_url.indexOf( "Karnataka_school_holidays.html");
tamilnadu_public_holidays_url=location_url.indexOf( "tamilnadu_public_holidays.html");
WeLikeGod_url=location_url.indexOf( "WeLikeGod.html");
HappyBirthDay_url=location_url.indexOf( "HappyBirthDay.html");
HappyEngineersDay_url=location_url.indexOf( "HappyEngineersDay.html");
fiverr_Comedy_url=location_url.indexOf( "fiverr_Comedy.html");
Roaming_144_Comedy_url=location_url.indexOf( "Roaming_144_Comedy.html");
JokesReduceTension_url=location_url.indexOf( "JokesReduceTension.html");
firefox_Comedy_url=location_url.indexOf( "firefox_Comedy.html");
Benefits_of_plants_url=location_url.indexOf( "Benefits_of_plants.html");
ITR_Refund_NOT_RECEIVED_url=location_url.indexOf( "ITR_Refund_NOT_RECEIVED");
Petrol_Usage_Milage_url=location_url.indexOf( "Petrol_Usage_Milage");
SBI_employee_never_help_url=location_url.indexOf( "SBI_employee_never_help");
AppolloPharmacy_url=location_url.indexOf( "AppolloPharmacy");
Friendship_day_url=location_url.indexOf( "Friendship_day.html");
Samsung_Light_Mode_url=location_url.indexOf( "Samsung_Light_Mode.html");
block_geocities_url=location_url.indexOf( "block_geocities.html");
I_FEEL_RENT_BETTER_THAN_LEASE_url=location_url.indexOf( "I_FEEL_RENT_BETTER_THAN_LEASE.html");
Pay_Book_Bharat_gas_online_url=location_url.indexOf( "Pay_Book_Bharat_gas_online.html");
rajaji_nagar_ho_url=location_url.indexOf( "rajaji_nagar_ho.html");
IND_ETDR_INTEREST_url=location_url.indexOf( "IND_ETDR_INTEREST.html");
INDIAN_BANK_ETDR_INT_01_YYYY_6_1_url=location_url.indexOf( "INDIAN_BANK_ETDR_INT_01_YYYY_6_1");
INDIAN_BANK_ETDR_INT_01_YEAR_url=location_url.indexOf( "INDIAN_BANK_ETDR_INT_01_YEAR");
FindIndianRupee_Duplicate_url=location_url.indexOf( "FindIndianRupee-Duplicate.html");
STEPS_OPENING_POSTOFFICE_ACCOUNT_url=location_url.indexOf( "STEPS_OPENING_POSTOFFICE_ACCOUNT.html");
HDFC_AMB_Hacker_url=location_url.indexOf( "HDFC_AMB_Hacker.html");
PostOfficeJointBalance_url=location_url.indexOf( "PostOfficeJointBalance.html");
DoNotWasteMoney_url=location_url.indexOf( "DoNotWasteMoney.html");
CurrentBillPayment_url=location_url.indexOf( "CurrentBillPayment.html");
Steps_to_Close_NPS_After_5_Years_url=location_url.indexOf( "Steps_to_Close_NPS_After_5_Years.html");
HomeChecklist_url=location_url.indexOf( "HomeChecklist");
HomeChecklist_Page_url=location_url.indexOf( "HomeChecklist_Page");
PETROL_AIR_PUMP_url=location_url.indexOf( "PETROL_AIR_PUMP.html");
No_IMPS_ippb_to_Bank_url=location_url.indexOf( "No_IMPS_ippb_to_Bank.html");
NEVER_USE_GPAY_MOBILE_RECHARGE_url=location_url.indexOf( "NEVER_USE_GPAY_MOBILE_RECHARGE.html");
SbiRewards_url=location_url.indexOf( "SbiRewards.html");
Traffic_violation_url=location_url.indexOf( "Traffic_violation.html");
Traffic_Violation_payment_url=location_url.indexOf( "Traffic_Violation_payment.html");
LoanLicSchoolActions_url=location_url.indexOf( "LoanLicSchoolActions.html");
HandleBankAMB_url=location_url.indexOf( "HandleBankAMB.html");
TVS_MONEY_WASTAGE_url=location_url.indexOf( "TVS_MONEY_WASTAGE.html");
COMPARE_ATM_MOB_PAY_url=location_url.indexOf( "COMPARE_ATM_MOB_PAY.html");
MOBILE_postpaid_payment_url=location_url.indexOf( "MOBILE_postpaid_payment.html");
nsc_open_url=location_url.indexOf( "nsc_open.html");
UselessGasTaxAgencies_url=location_url.indexOf( "UselessGasTaxAgencies.html");
SaveMoney_url=location_url.indexOf( "SaveMoney.html");
China_Tv_mobile_router_url=location_url.indexOf( "China_Tv_mobile_router.html");
LPG_No_tips_delivery_url=location_url.indexOf( "LPG_No_tips_delivery.html");
airtel_recharge_url=location_url.indexOf( "airtel_recharge.html");
PostOfficeHolidays_url=location_url.indexOf( "PostOfficeHolidays.html");
document.write( "<TABLE bgcolor='cyan' width='100%' border='1'>");
	if( -1 == HomePage_url && -1 == My_Drawings_url_01 )
	{
		document.write( "<TR>\
					<TD valign='top' style='width:95px;' align='left'>\
						<TABLE style='width:100%'>\
							<TR>\
								<TD style='width:72px;' id='homepage' valign='top' align='left'>\
									<A style='display:block;' onmouseover='OpenHomeMenu()' onclick='toggleTable(event)' href='index.html'>Home1</A>\
								</TD>\
							</TR>\
						</TABLE>");
		if( document.getElementById('homepage') )
		{
			document.getElementById('homepage').style.backgroundColor='violet';
		}
	}
	else if( ( -1 != My_Drawings_url_01 ) || ( -1 != My_Drawings_url_02 ) )
	{
		document.write( "<TR>\
					<TD valign='top' style='width:95px;' align='left'>\
						<TABLE style='width:100%'>\
							<TR>\
								<TD style='width:72px;' id='homepage' valign='top' align='left'>\
									<A style='display:block;' onmouseleave='CloseHomeMenu();' onmouseover='OpenHomeMenu()' onclick='toggleTable(event)' href='index.html'>Home2</A>\
								</TD>\
							</TR>\
						</TABLE>");
		document.getElementById('homepage').style.backgroundColor='cyan';
	}
	else
	{
		document.write( "<TR>\
					<TD valign='top' style='width:89px;' align='left'>\
						<TABLE style='width:100%'>\
							<TR>\
								<TD style='width:72px;' id='homepage' valign='top' align='left'>\
									<A style='display:block;' onmouseover='OpenHomeMenu()' onclick='toggleTable(event)'>Home3</A>\
								</TD>\
							</TR>\
						</TABLE>");
		document.getElementById('homepage').style.backgroundColor='white';
	}
	document.write( "<DIV id='HomePanel' class='HomePageSidePanel'>");
	document.write( "<A style='display:block;' href='javascript:void(0)' class='closebtn' onmouseleave='CloseHomeMenu();' onclick='CloseHomeMenu()'>x</A>");
if( -1 == NMurugesan_cv_url )
{
	document.write( "<A style='display:block;' href='NMurugesan_cv.html'>Murugesan N cv</A>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
else
{
	// document.write( "<A style='display:block;'><B><U><FONT color='red'>NMurugesan CV</B></U></FONT>");
	document.write("<A style='display:block; color:red; font-weight:bold; text-decoration:underline;'>NMurugesan CV</A>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
/*
if( -1 == Achievement_url )
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"murugesan_achievements.html'>My achievements</A>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
else
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>My achievements</B></U></FONT>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
if( -1 != Appreciation_Evidence_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>APPRECIATION EVIDENCE</B></U></FONT>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"Appreciation_Evidence.html'>Appreciation evidence</A>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
if( -1 != MyVote_Url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>MY VOTE COUNt</B></U></FONT>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"My_upvote.html'>My vote count</A>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
if( -1 != Srinivasan_Ramanujan_Summation_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>SUMMATION</B></U></FONT>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"Srinivasan_Ramanujan_Summation.html'>Summation</A>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
if( -1 != Earth_Mathematics_Pre_kg_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>MATHEMATICS PRE-KG</B></U></FONT>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"Earth-Mathematics-Pre-kg.html'>Mathematics PRE-KG</A>");
	if( document.getElementById('homepage') )
	{
		document.getElementById('homepage').style.backgroundColor='violet';
	}
}
}
*/
document.write( "</DIV>");
document.write( "</TD>");
// #}

//#{
document.write( "<TD valign='top' style='width:10px;' align='left'>");
document.write( "<TABLE style='width:100%'><TR><TD valign='top' align='left'><A style='display:block;' onmouseover='OpenHealthTips()' onclick='OpenHealthTips()' id='moneyhelp01'>MoneyHelp</A></TD></TR></TABLE>");
document.write( "<DIV id='EntHealthId01' class='MoneyHealthTips'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != inhale_hotwater_ent_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>&#2951;&#2992;&#3009;&#2990;&#2994;&#3021; &#2970;&#3010;&#2975;&#3006;&#2985; &#2984;&#3008;&#2992;&#3021; &#2953;&#2995;&#3021;&#2995;&#3007;&#2996;&#3009;&#2965;&#3021;&#2965;</B></U></FONT></A>");
	document.write( "<A style='display:block;'><FONT color='red'><B><U>inhale hotwater ent</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"spending.html'><FONT color='white'><B><U>PreventWastage</B></U></FONT></A>");
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"Sustainable_Living.html'><FONT color='white'>Save lives and money</FONT></A>");
}
if( -1 != Health_tips_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>HEALTH TIPS</FONT></B></U></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"Health-tips.html'>Health tips</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
//#}

//#{
document.write( "<TD valign='top' style='width:10px;' align='left'>");
document.write( "<DIV id='MoneyHelpPanel01' class='MoneyHelpSidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != mis_interest_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>&#2997;&#2994;&#3021;&#2994;&#2992;&#2970;&#3009; &#2986;&#2969;&#3021;&#2965;&#2995;&#3007;&#2986;&#3021;&#2986;&#3009;01</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"Sustainable_Living.html'>SaveLives</A>");
}
if( -1 != nsc_interest_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>&#2997;&#2994;&#3021;&#2994;&#2992;&#2970;&#3009; &#2986;&#2969;&#3021;&#2965;&#2995;&#3007;&#2986;&#3021;&#2986;&#3009;02</B></U></FONT>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"nsc_interest.html'>&#2997;&#2994;&#3021;&#2994;&#2992;&#2970;&#3009; &#2986;&#2969;&#3021;&#2965;&#2995;&#3007;&#2986;&#3021;&#2986;&#3009;02</A>");
}
if( -1 != ppf_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>&#2997;&#2994;&#3021;&#2994;&#2992;&#2970;&#3009; &#2986;&#2969;&#3021;&#2965;&#2995;&#3007;&#2986;&#3021;&#2986;&#3009;03</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"ppf.html'><FONt color='white'>&#2997;&#2994;&#3021;&#2994;&#2992;&#2970;&#3009; &#2986;&#2969;&#3021;&#2965;&#2995;&#3007;&#2986;&#3021;&#2986;&#3009;03</FONT></A>");
}
if( -1 != shared_mkt_mis_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>SHARED MKT MIS</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"shared-market-mis-compare.html'><FONt color='white'>SHARED MKT MIS</FONT></A>");
}
if( -1 != MIS_INTEREST_EARLIER_INTERNET_BANKING_ERROR_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>POST NET LEAP ERR</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"MIS_INTEREST_EARLIER_INTERNET_BANKING_ERROR.html'>Post net leap err</A>");
}
if( -1 != MIS_ONLINE_EXCEPTION_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>MIS ONLINE EXCEPTION</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"MIS_ONLINE_EXCEPTION.html'>MIS ONLINE EXCEPTION</A>");
}
if( -1 != THIRUMOOLAR_MIS_EXAMPLE_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>THIRUMOOLAR MIS</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"THIRUMOOLAR-MIS-EXAMPLE.html'><FONT color='white'>THIRUMOOLAR MIS</FONT></A>");
}
if( -1 != do_not_waste_money_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>Save money</FONT></B></U></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"do_not_waste_money.html'>Save money</A>");
}
if( -1 != AIBEX_mobile_cover_seller_amazon_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>AIBEX mobile cover</FONT></B></U></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"AIBEX_mobile_cover_seller_amazon.html'>AIBEX mobile cover</A>");
}
if( -1 != HowToEarnMoney_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>EARN MONEY</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"HowToEarnMoney.html'>Earn money</A>");
}
if( -1 != DNC_Chit_fund_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>CHIT FUND</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"DNC_Chit_fund.html'>Chit fund</A>");
}
if( -1 != SBI_ATM_CARD_SERVICE_CHARGES_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>ATM CHARGES</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"SBI_ATM_CARD_SERVICE_CHARGES.html'>ATM charges</A>");
}
if( -1 != BSNLBetterThanPrivate_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>BSNL VS PRIVATE</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"bsnl_airtel_jio.html'>Bsnl vs private</A>");
}
if( -1 != SBIAtmUsage_url )
{
	document.write( "<A style='display:block;'><FONT color='red'><B><U>SBI ATM ERR</B></U></FONT></A>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"SBIAtmUsage.html'>Sbi Atm Err</A>");
}
if( -1 != closing_nsc_online_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>CLOSING NSC ONLINE</B></U></FONT>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"closing-nsc-online.html'>CLOSING NSC ONLINE</A>");
}
if( -1 != term_deposit_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>TERM DEPOSIT</B></U></FONT>");
	document.getElementById('moneyhelp01').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"term_deposit.html'>TERM deposit</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
// #}

// #{
// document.write( "<TD valign='top' style='width:183px;' align='left'>");
// document.write( "<TABLE style='width:100%'><TR><TD valign='top' align='left'><A style='display:block;' onmouseleave='CloseHomeMenu();' onmouseout='CloseHomeMenu();' onmouseover='OpenSBI_employee_never_help01()' onclick='OpenSBI_employee_never_help01()' id='SBI_employee_never_help01'>SBI1 EMP NEVER HELP</A></TD></TR></TABLE>");
// document.write( "<DIV id='SBI_employee_never_helpPanel01' class='SBI_employee_never_help01SidePanel01'>");
// document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
// document.write( "<TD valign='top' style='width:183px;' align='left'>");
// document.write( "<TABLE style='width:100%'><TR><TD valign='top' align='left'><A style='display:block;' onmouseleave='CloseHomeMenu();' onmouseover='OpenSBI_employee_never_help01()' onclick='OpenSBI_employee_never_help01()' id='SBI_employee_never_help01'>SBI2 EMP NEVER HELP</A></TD></TR></TABLE>");
// document.write( "<DIV id='SBI_employee_never_helpPanel01' class='SBI_employee_never_help01SidePanel01'>");
// document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
document.write( "<TD valign='top' style='width:183px;' align='left'>");
document.write( "<TABLE style='width:100%'><TR><TD valign='top' align='left'><A style='display:block;' onmouseleave='CloseHomeMenu();' onmouseover='OpenSBI_employee_never_help01()' onclick='OpenSBI_employee_never_help01()' id='SBI_employee_never_help01'>SBI3 EMP NEVER HELP</A></TD></TR></TABLE>");
document.write( "<DIV id='SBI_employee_never_helpPanel01' class='SBI_employee_never_help01SidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");

if( -1 != SBI_employee_never_help_url )
{
	// document.write( "<A><FONT color='red'><B><U>Sbi employee never help</B></U></FONT></A>");
	// document.getElementById('SBI_employee_never_help01').style.backgroundColor='violet';
	// document.getElementById('homepage').style.backgroundColor='';
	// document.write( "<A><FONT color='red'><B><U>Sbi employee never help</B></U></FONT></A>");
	// document.getElementById('SBI_employee_never_help01').style.backgroundColor = 'violet';
	// document.getElementById('homepage').style.backgroundColor = '';
	document.write( "<A><FONT color='red'><B><U>Sbi employee never help</B></U></FONT></A>");
	document.getElementById('SBI_employee_never_help01').style.backgroundColor = 'violet';
	document.getElementById('homepage').style.backgroundColor = '';
}
else
{
	// document.write( "<A href='"+prefix_poemDir+"SBI_employee_never_help.html'>SBI emp never help</A>");
	document.write( "<A href='" + prefix_poemDir + "SBI_employee_never_help.html'>SBI emp never help</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
setTimeout(function() {
    const helpLink = document.getElementById('SBI_employee_never_help01');
    if (helpLink) {
        helpLink.addEventListener('mouseleave', function() {
            CloseHomeMenu();
        });
        helpLink.addEventListener('mouseover', function() {
            OpenSBI_employee_never_help01();
        });
    }
}, 0); // Ensures the code runs after the DOM is fully updated
// #}

// #{
document.write( "<TD valign='top' style='width:10px;' align='left'>");
document.write( "<TABLE style='width:100%'><TR><TD id='Garbages' valign='top' align='left'><A style='display:block;' onmouseover='GarbagesHelp01()' onclick='GarbagesHelp01()'>Garbages</A></TD></TR></TABLE>");
document.write( "<DIV id='GarbagesPanel01' class='GarbagesSidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != AppolloPharmacy_url )
{
	document.write( "<A><FONT color='red'><B><U>APPOLLO PHARMACY</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"AppolloPharmacy.html'>Appollo Pharmacy</A>");
}
if( -1 != GarbageEmail_url )
{
	document.write( "<A><FONT color='red'><B><U>GARBAGE EMAILS</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"GarbageEmail.html'>Garbage emails</A>");
}
if( -1 != LoanLicSchoolActions_url )
{
	document.write( "<A><FONT color='red'><B><U>LOAN LIC SCHOOL ACTIONS</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"LoanLicSchoolActions.html'>LoanLicSchoolActions</A>");
}
if( -1 != HackUrlEmailNumSms_url )
{
	document.write( "<A><FONT color='red'><B><U>HACK URL EMAIL SMS</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"HackUrlEmailNumSms.html'>Hack url email Sms</A>");
}
if( -1 != GarbageNumbers_url )
{
	document.write( "<A><FONT color='red'><B><U>Garbage numbers</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"GarbageNumbers.html'>Garbage numbers</A>");
}
if( -1 != block_url_msedge_url )
{
	document.write( "<A><FONT color='red'><B><U>block url msedge</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"block_url_msedge.html'>block url msedge</A>");
}
if( -1 != StepsToUnlockSim_url )
{
	document.write( "<A><FONT color='red'><B><U>Steps to unlock SIM</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"StepsToUnlockSim.html'>Steps to unlock SIM</A>");
}
if( -1 != Karnataka_school_holidays_url )
{
	document.write( "<A><FONT color='red'><B><U>Karnataka school holidays</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Karnataka_school_holidays.html'>Karnataka school holidays</A>");
}
if( -1 != tamilnadu_public_holidays_url )
{
	document.write( "<A><FONT color='red'><B><U>TAMILNADU school holidays</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"tamilnadu_public_holidays.html'>TAMILNADU school holidays</A>");
}
if( -1 != WeLikeGod_url )
{
	document.write( "<A><FONT color='red'><B><U>We like GOD</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"WeLikeGod.html'>We like GOD</A>");
}
if( -1 != HappyBirthDay_url )
{
	document.write( "<A><FONT color='red'><B><U>Happy birth day</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"HappyBirthDay.html'>Happy birth day</A>");
}
if( -1 != HappyEngineersDay_url )
{
	document.write( "<A><FONT color='red'><B><U>Happy engineers day</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"HappyEngineersDay.html'>Happy engineers day</A>");
}
if( -1 != fiverr_Comedy_url )
{
	document.write( "<A><FONT color='red'><B><U>Fiverr comedy</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"fiverr_Comedy.html'>Fiverr comedy</A>");
}
if( -1 != Roaming_144_Comedy_url )
{
	document.write( "<A><FONT color='red'><B><U>Roaming 144 comedy</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Roaming_144_Comedy.html'>Roaming 144 comedy</A>");
}
if( -1 != JokesReduceTension_url )
{
	document.write( "<A><FONT color='red'><B><U>Reduce tension</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"JokesReduceTension.html'>Reduce tension</A>");
}
if( -1 != firefox_Comedy_url )
{
	document.write( "<A><FONT color='red'><B><U>Firefox comedy</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"firefox_Comedy.html'>Firefox comedy</A>");
}
if( -1 != Benefits_of_plants_url )
{
	document.write( "<A><FONT color='red'><B><U>Benefits of plants</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Benefits_of_plants.html'>Benefits of plants</A>");
}
if( -1 != Friendship_day_url )
{
	document.write( "<A><FONT color='red'><B><U>Friendship day</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Friendship_day.html'>Friendship day</A>");
}
if( -1 != Samsung_Light_Mode_url )
{
	document.write( "<A><FONT color='red'><B><U>Samsung Light Dark mode</B></U></FONT></A>");
	document.getElementById('Garbages').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Samsung_Light_Mode.html'>Samsung Light Dark mode</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
// }
// {
document.write( "<TD valign='top' style='width:10px;' align='left'>");
document.write( "<TABLE style='width:100%'><TR><TD id='AadhaarHelp' valign='top' align='left'><A style='display:block;' onmouseover='AadhaarHelp01()' onclick='AadhaarHelp01()'>AadharHelp</A></TD></TR></TABLE>");
document.write( "<DIV id='AadhaarHelpPanel01' class='AadhaarHelpSidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != UPDATE_AADHAR_WAIT_DAYS_url )
{
	document.write( "<A><FONT color='red'>UPDATE_AADHAR_WAIT_DAYS</FONT></A>");
	document.getElementById('AadhaarHelp').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"UPDATE_AADHAR_WAIT_DAYS.html'>Update_aadhar_wait_days</A>");
}
if( -1 != TNEB_ADD_AADHAAR_ONLINE_url )
{
	document.write( "<A><FONT color='red'>TNEB_ADD_AADHAAR_ONLINE</FONT></A>");
	document.getElementById('AadhaarHelp').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"TNEB_ADD_AADHAAR_ONLINE.html'>Tneb_add_aadhaar_online</A>");
}
if( -1 != DOWNLOAD_PAN_AADHAR_url )
{
	document.write( "<A><FONT color='red'>DOWNLOAD_PAN_AADHAR</FONT></A>");
	document.getElementById('AadhaarHelp').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"DOWNLOAD_PAN_AADHAR.html'>Download_pan_aadhar</A>");
}
if( -1 != aadhaar_unlock_bio_metrics_url )
{
	document.write( "<A><FONT color='red'>AADHAAR UNLOCK BIO METRICS</FONT></A>");
	document.getElementById('AadhaarHelp').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"aadhaar-unlock-bio-metrics.html'>Aadhaar unlock bio metrics</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
// }
// {
document.write( "<TD valign='top' style='width:10px;' align='left'>");
document.write( "<TABLE style='width:100%'><TR><TD id='MyPredict' valign='top' align='left'><A style='display:block;' onmouseover='MyPredict01()' onclick='MyPredict01()'>MyPredict</A></TD></TR></TABLE>");
document.write( "<DIV id='MyPredictPanel01' class='MyPredictSidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != Prediction_url )
{
	document.write( "<A><FONT color='red'>Prediction</FONT></A>");
	document.getElementById('MyPredict').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Prediction.html'>Prediction</A>");
}
/*
if( -1 != Prediction_01_url )
{
	document.write( "<A><FONT color='red'>Prediction_01</FONT></A>");
	document.getElementById('MyPredict').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Prediction_01.html'>Prediction_01</A>");
}
*/
if( -1 != My_dream_at_universe_url )
{
	document.write( "<A><FONT color='red'>My_dream_at_universe</FONT></A>");
	document.getElementById('MyPredict').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"My_dream_at_universe.html'>My_dream_at_universe</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
// }
// {
document.write( "<TD valign='top' style='width:10px;' align='left'>");
document.write( "<TABLE style='width:100%'><TR><TD id='WindowsHelp' valign='top' align='left'><A style='display:block;' onmouseover='WindowsHelp01()' onclick='WindowsHelp01()'>WindowsHelp</A></TD></TR></TABLE>");
document.write( "<DIV id='WindowsHelpPanel01' class='WindowsHelpSidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != UserCountConnectedToBSNLNetwork_url )
{
	document.write( "<A><FONT color='red'><B><U>Users connected 2 BSNL net</B></U></FONT></A>");
	document.getElementById('WindowsHelp').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"find_Number_Of_system_connected_to_bsnl.html'>Users connected 2 BSNL net</A>");
}
if( -1 != Windows_ERR_HELP_url || -1 != WindowsNetErrHelp_url || -1 != Set_Unlimited_Windows_10_Network_url || -1 != windows_network_url )
{
	if( -1 != Windows_ERR_HELP_url )
	{
		document.write( "<A style='color:red;' id='Windowserrhelphref'>Windows_ERR_HELP</A>");
		document.getElementById('WindowsHelp').style.backgroundColor='violet';
	}
	else
	{
		document.write( "<A id='Windowserrhelphref' href='"+prefix_poemDir+"Windows_ERR_HELP.html'><FONT color='white'>Windows_ERR_HELP</FONT></A>");
		document.getElementById('WindowsHelp').style.backgroundColor='violet';
	}
}
else
{
	document.write( "<A id='Windowserrhelphref' href='"+prefix_poemDir+"Windows_ERR_HELP.html'>Windows_ERR_HELP</A>");
}
if( -1 != thunderbird_at_Windows_url )
{
	document.write( "<A><FONT color='red'>thunderbird_at_Windows</FONT></A>");
	document.getElementById('WindowsHelp').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"thunderbird_at_Windows.html'>thunderbird_at_Windows</A>");
}
if( -1 != Import_Eml_File_To_Thunderbird_url )
{
	document.write( "<A><FONT color='red'><B><U>Import fileEmail 2 thunderbird</B></U></FONT></A>");
	document.getElementById('WindowsHelp').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Import_Eml_File_To_Thunderbird.html'>Import fileEmail 2 thunderbird</A>");
}
if( -1 != ThunderBird_All_Mail_Count_url )
{
	document.write( "<A><FONT color='red'><B><U>ThunderBird mail count</B></U></FONT></A>");
	document.getElementById('WindowsHelp').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"ThunderBird_All_Mail_Count.html'>ThunderBird mail count</A>");
}
if( -1 != Change_Default_SearchEngine_url )
{
	document.write( "<A><FONT color='red'>firefox to use google.co.in</FONT></A>");
	document.getElementById('WindowsHelp').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Change_Default_SearchEngine.html'>firefox to use google.co.in</A>");
}
if( -1 != Windows_11_Patch_Worst_url )
{
	document.write( "<A><FONT color='red'><B><U>Windows 11 worst patch</B></U></FONT></A>");
	document.getElementById('WindowsHelp').style.backgroundColor='violet';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"IDA14092023000.html'>Windows 11 worst patch</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
// }
// {
document.write( "<TD valign='top' style='width:10px;' align='left'>");
if(-1 == My_Drawings_url_01 )
{
	document.write( "<TABLE style='width:100%'><TR><TD id='Myself' valign='top' align='left'><A style='display:block;' onmouseover='Myself01()' onclick='Myself01()'>Myself</A></TD></TR></TABLE>");
}
else
{
	document.write( "<TABLE bgcolor='violet' style='width:100%'><TR><TD id='Myself' valign='top' align='left'><A style='display:block;' onmouseover='Myself01()' onclick='Myself01()'>Myself</A></TD></TR></TABLE>");
}
document.write( "<DIV id='MyselfPanel01' class='MyselfSidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != spending_url )
{
	document.write( "<A><FONT color='red'><B><U>DO NOT WASTE MONEY</B></U></FONT></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Sustainable_Living.html'>DO NOT WASTE MONEY</A>");
}
if( -1 != murugesan_openssl_url )
{
	document.write( "<A><FONT color='red'><B><U>MY RANKING</B></U></FONT></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"murugesan_openssl.html'>MY RANKING</A>");
}
if( -1 != My_Drawings_url )
{
	document.write( "<A id='my_drawing' style='color:red;'><B><U>My drawings</B></U></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	if( -1 != My_Drawings_url_01 )
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else if( -1 != My_Drawings_url_02 )
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else if( -1 != My_Drawings_url_02 )
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else if( -1 != My_Drawings_url_03 )
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else if( -1 != My_Drawings_url_04 )
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else if( -1 != My_Drawings_url_05 )
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else if( -1 != My_Drawings_url_06 )
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else if( -1 != My_Drawings_url_07)
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'><FONT color='white'>My drawings</FONT></A>");
	}
	else
	{
		document.write( "<A style='color:black;' id='my_drawing' href='"+prefix_poemDir+"My_Drawings.html'>My drawings</A>");
	}
}
	if( document.getElementById( "my_drawing" ) )
	{
		if( -1 != window.location.toString().indexOf( "india.html" ) )
		{
			document.getElementById( "my_drawing" ).href = "My_Drawings.html";
			document.getElementById( "my_drawing" ).style.color = "cyan";
		}
		else if( -1 != window.location.toString().indexOf( "tajmahal.html" ) )
		{
			document.getElementById( "my_drawing" ).href = "My_Drawings.html";
			document.getElementById( "my_drawing" ).style.color = "cyan";
		}
	}
	if( document.getElementById( "Windowserrhelphref" ) )
	{
		if( -1 != window.location.toString().indexOf( "cygwin_laptop_battery_alert" ) )
		{
			document.getElementById( "Windowserrhelphref" ).href = "Windows_ERR_HELP.html";
			document.getElementById( "Windowserrhelphref" ).style.color = "cyan";
		}
	}
if( -1 != murugesan_openssl_search_url )
{
	document.write( "<A><FONT color='red'><B><U>murugesan openssl search</B></U></FONT></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"murugesan_openssl_search.html'>murugesan openssl search</A>");
}
if( -1 != poems_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>My tamil poems</B></U></FONT>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='poems/index.html'>My tamil poems</A>");
}
if( -1 != I_love_mathematics_url )
{
	document.write( "<A><FONT color='red'><B><U>I love mathematics</B></U></FONT></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"I_love_mathematics.html'>I love mathematics</A>");
}
if( -1 != TamilLetters_url )
{
	document.write( "<A><FONT color='red'><B><U>Tamil letters</B></U></FONT></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"TamilLetters.html'>Tamil letters</A>");
}
if( -1 != kannada_letters_url )
{
	document.write( "<A><FONT color='red'><B><U>Kannada letters</B></U></FONT></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"kannada_letters.html'>Kannada letters</A>");
}
if( -1 != Gregorian_calendar_url )
{
	document.write( "<A><FONT color='red'><B><U>Gregorian calendar</B></U></FONT></A>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Gregorian_calendar.html'>Gregorian calendar</A>");
}
if( -1 != exercise_at_home_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>Exercise at home</B></U></FONT>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"exercise_at_home.html'>Exercise at home</A>");
}
if( -1 != thirukkural_001_kadavuL_vaazhthu_url )
{
	document.write( "<A style='display:block;'><B><U><FONT color='red'>THIRUKKURAL</B></U></FONT>");
	document.getElementById('Myself').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A style='display:block;' href='"+prefix_poemDir+"thirukkural_001_kadavuL_vaazhthu.html'>Thirukkural</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
// }
// {
document.write( "<TD valign='top' align='left'>");
document.write( "<TABLE style='width:100%'><TR><TD id='PrivacyPolicy' valign='top' align='left'><A style='display:block;' onmouseover='PrivacyPolicy01()' onclick='PrivacyPolicy01()'>PrivacyPolicy</A></TD></TR></TABLE>");
document.write( "<DIV id='PrivacyPolicyPanel01' class='PrivacyPolicySidePanel01'>");
document.write( "<A href='javascript:void(0)' class='closebtn' onclick='CloseMoneyHelp()'>x</A>");
if( -1 != KnowledgeTransferAmount_url )
{
	document.write( "<A><FONT color='red'><B><U>KNOWLEDGE TRANSFER AMOUNT</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"KnowledgeTransferAmount.html'>KNOWLEDGE TRANSFER AMOUNT</A>");
}
if( -1 != Time_travel_knowledge_transfer_url )
{
	document.write( "<A><FONT color='red'><B><U>TIME TRAVEL INSIDE UNIVERSE</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Time-travel-knowledge-transfer.html'>TIME TRAVEL INSIDE UNIVERSE</A>");
}
if( -1 != Gold_seller_comparison_url )
{
	document.write( "<A><FONT color='red'><B><U>Gold seller compare</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Gold-seller-comparison.html'>Gold seller compare</A>");
}
if( -1 != INDIAN_PM_url )
{
	document.write( "<A><FONT color='red'><B><U>INDIAN PM HISTORY</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"INDIAN_PM.html'>INDIAN PM HISTORY</A>");
}
if( -1 != TAMILNADU_CM_url )
{
	document.write( "<A><FONT color='red'><B><U>TAMILNADU CM HISTORY</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"TAMILNADU_CM.html'>Tamilnadu cm history</A>");
}
if( -1 != KARNATAKA_CM_url )
{
	document.write( "<A><FONT color='red'><B><U>KARNATAKA CM HISTORY</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"KARNATAKA_CM.html'>Karnataka cm history</A>");
}
if( -1 != privacy_url )
{
	document.write( "<A><FONT color='red'><B><U>PRIVACY POLICY</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"privacy.html'>Privacy policy</A>");
}
if( -1 != earth_politics_or_general_age_url && -2 != earth_politics_or_general_age_url )
{
	document.write( "<A><FONT color='red'><B><U>Politics age</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else if( -2 == earth_politics_or_general_age_url )
{
	document.write( "<A href='"+prefix_poemDir+"earth_politics_or_general_age.html'><FONT color='white'>Politics age</FONT></A>");
}
else
{
	document.write( "<A href='"+prefix_poemDir+"earth_politics_or_general_age.html'>Politics age</A>");
}
if( -1 != Politician_assets_url )
{
	document.write( "<A><FONT color='red'><B><U>Earth politician assets</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"Politician_assets.html'>Earth politician assets</A>");
}
if( -1 != NewsPolitics_url )
{
	document.write( "<A><FONT color='red'><B><U>NEWS POLITICS</B></U></FONT></A>");
	document.getElementById('PrivacyPolicy').style.backgroundColor='violet';
	document.getElementById('homepage').style.backgroundColor='';
}
else
{
	document.write( "<A href='"+prefix_poemDir+"NewsPolitics.html'>NEWS politics</A>");
}
document.write( "</DIV>");
document.write( "</TD>");
// }
document.write( "</TR>");
document.write( "</tABLE>");
function DisplayThirukkuralSelect( selectedVal )
{
	if( 'undefined' == typeof selectedVal )
	{
	}
	else
	{
		DefaultVal=selectedVal;
	}
	arr_options =	[
				["<OPTION VALUE='1' selected>001. &#2965;&#2975;&#2997;&#3009;&#2995;&#3021; &#2997;&#3006;&#2996;&#3021;&#2980;&#3021;&#2980;&#3009;</option>"],
				["<OPTION VALUE='2' >002. &#2997;&#3006;&#2985;&#3021; &#2970;&#3007;&#2993;&#2986;&#3021;&#2986;&#3009;</option>"],
				["<OPTION VALUE='3' >003.  &#2984;&#3008;&#2980;&#3021;&#2980;&#3006;&#2992;&#3021; &#2986;&#3014;&#2992;&#3009;&#2990;&#3016;</option>"],
				["<OPTION VALUE='4' >004.  அற&#2985;&#3021; வலியுறுத்தல்</option>" ],
				[ "<OPTION VALUE='5' >005.  &#2951;&#2994;&#3021;&#2997;&#3006;&#2996;&#3021;&#2965;&#3021;&#2965;&#3016; </option>" ],
				[ "<OPTION VALUE='6' >006.  &#2997;&#3006;&#2996;&#3021;&#2965;&#3021;&#2965;&#3016;&#2980;&#3021; &#2980;&#3009;&#2979;&#3016;&#2984;&#2994;&#2990;&#3021; </option>" ],
				[ "<OPTION VALUE='7' >007.  &#2990;&#2965;&#3021;&#2965;&#2975;&#3021;&#2986;&#3015;&#2993;&#3009; </option>" ],
				[ "<OPTION VALUE='8' >008. &#2949;&#2985;&#3021;&#2986;&#3009;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='9' >009. &#2997;&#3007;&#2992;&#3009;&#2984;&#3021;&#2980;&#3019;&#2990;&#3021;&#2986;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='10' >010. &#2951;&#2985;&#3007;&#2991;&#2997;&#3016; &#2965;&#3010;&#2993;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='11' >011. &#2970;&#3014;ய்ந்ந&#2985;&#3021;றியறிதல் அதி&#2965;&#3006;ரம்</option>" ],
				[ "<OPTION VALUE='12' >012. &#2984;&#2975;&#3009;&#2997;&#3009;&#2984;&#3007;&#2994;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='13' >013. &#2949;&#2975;&#2965;&#3021;&#2965;&#2990;&#3021; &#2953;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='14' >014. &#2962;&#2996;&#3009;&#2965;&#3021;&#2965;&#2990;&#3021; &#2953;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='15' >015. &#2986;&#3007;&#2993;&#2985;&#3021; &#2951;&#2994;&#3021; &#2997;&#3007;&#2996;&#3016;&#2991;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='16' >016. &#2986;&#3018;&#2993;&#3016; &#2953;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='17' >017. &#2949;&#2996;&#3009;&#2965;&#3021;&#2965;&#3006;&#2993;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='18' >018. &#2997;&#3014;&#2947;&#2965;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='19' >019. &#2986;&#3009;&#2993;&#2969;&#3021;&#2965;&#3010;&#2993;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='20' >020. &#2986;&#2991;&#2985;&#3007;&#2994; &#2970;&#3018;&#2994;&#3021;&#2994;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='21' >021. &#2980;&#3008;&#2997;&#3007;&#2985;&#3016; &#2949;&#2970;&#3021;&#2970;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='22' >022. &#2962;&#2986;&#3021;&#2986;&#3009;&#2992;&#2997;&#3009; &#2949;&#2993;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='23' >023. &#2952;&#2965;&#3016;</option>" ],
				[ "<OPTION VALUE='24' >024. &#2986;&#3009;&#2965;&#2996;&#3021;</option>" ],
				[ "<OPTION VALUE='25' >025. &#2949;&#2992;&#3009;&#2995;&#3021; &#2953;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='26' >026. &#2986;&#3009;&#2994;&#3006;&#2994;&#3021; &#2990;&#2993;&#3009;&#2980;&#3021;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='27' >027. &#2980;&#2997;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='28' >028. &#2965;&#3010;&#2975;&#3006;&#2962;&#2996;&#3009;&#2965;à¯&#2965;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='29' >029. &#2965;&#2995;&#3021;&#2995;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='30' >030. &#2997;&#3006;&#2991;&#3021;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='31' >031. &#2997;&#3014;&#2965;&#3009;&#2995;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='32' >032. &#2951;&#2985;à¯&#2985;à®¾&#2970;&#3014&#2991;&#3021;&#2991;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='33' >033. &#2965;&#3018;&#2994;&#3021;&#2994;&#3006&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='34' >034. &#2984;&#3007;&#2994;&#3016&#2991;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='35' >035. &#2980;&#3009;&#2993;&#2997;&#3009;</option>" ],
				[ "<OPTION VALUE='36' >036. &#2990;&#3014;&#2991;&#3021;&#2953;&#2979;&#2992;&#3021;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='37' >037. &#2949;&#2997;&#3006;à®…&#2993;&#3009;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='38' >038. &#2954;&#2996;&#3021;</option>" ],
				[ "<option disabled='disabled' class='clsOption'>&#2986;&#3018;&#2992;&#3009;&#2975;&#3021;&#2986;&#3006;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='39' >039. &#2951;&#2993;&#3016;&#2990;&#3006;&#2975;&#3021;&#2970;&#3007</option>" ],
				[ "<OPTION VALUE='40' >040. &#2965;&#2994;&#3021;&#2997;&#3007;</option>" ],
				[ "<OPTION VALUE='41' >041. &#2965;&#2994;&#3021;&#2994;&#3006&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='42' >042. &#2965;&#3015;&#2995;&#3021;&#2997;&#3007;</option>" ],
				[ "<OPTION VALUE='43' >043. &#2949;&#2993;&#3007;&#2997;&#3009;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='44' >044. &#2965;&#3009;&#2993;&#3021;&#2993;&#2990;&#3021; &#2965;&#2975;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='45' >045. &#2986;&#3014&#2992;&#3007;&#2991;&#3006;&#2992;&#3016;&#2980;à¯ &#2980;&#3009;&#2979;&#3016;&#2965;à¯&#2965;&#3019;&#2975;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='46' >046. &#2970;&#3007&#2993;&#3021;&#2993;&#3007;&#2985;&#2990;&#3021; &#2970;&#3015&#2992;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='47' >047. &#2980;&#3014;&#2992;&#3007;&#2984;&#3021;&#2980;&#3009; &#2970;&#3014&#2991;&#2994;&#3021;&#2997;&#2965;&#2965;&#3016;</option>" ],
				[ "<OPTION VALUE='48' >048. &#2997;&#2994;&#3007; &#2949;&#2993;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='49' >049. &#2965;&#3006;&#2965;&#3006;&#2994;&#2990;&#3021; &#2949;&#2993;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='50' >050. &#2951;&#2975;&#2985;à¯ &#2949;&#2993;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='51' >051. &#2980;&#3014;&#2992;&#3007;&#2984;&#3021;&#2980;&#3009; &#2980;&#3014;&#2995;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='52' >052. &#2980;&#3014;&#2992;&#3007;&#2984;&#3021;&#2980;&#3009; &#2997;&#3007;&#2985;&#3016;&#2991;&#3006;&#2975;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='53' >053. &#2970;&#3009&#2993;&#3021;&#2993;&#2990;&#3021; &#2980;&#2996;&#3006;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='54' >054. &#2986;&#3018&#2970;&#3021;&#2970;&#3006;&#2997;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='55' >055. &#2970;&#3014;&#2969;&#3021;&#2965;&#3019;&#2985;&#3021;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='56' >056. &#2965;&#3018;&#2975;&#3009;&#2969;à¯&#2965;&#3019;&#2985;à¯&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='57' >057. &#2997;&#3014;&#2992;&#3009;&#2997;&#2984;&#3021;&#2980; &#2970;&#3014&#2991;&#3021;&#2991;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='58' >058. &#2965;&#2979;&#3021;&#2979;&#3019;&#2975;&#3021;&#2975;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='59' >059. &#2962;&#2993;&#3021;&#2993;&#3006;&#2975;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='60' >060. &#2954;&#2965;à¯&#2965;&#2990;&#3021; &#2953;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='61' >061. &#2990;&#2975;&#3007; &#2951;&#2985;à¯&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='62' >062. &#2950;&#2995;&#3021;&#2997;&#3007;&#2985;&#3016; &#2953;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='63' >063. &#2951;&#2975;&#3009;&#2965;à¯&#2965;&#2979;&#3021; &#2949;&#2996;&#3007;&#2991;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='64' >064. &#2949;&#2990;&#3016;&#2970;&#3021;&#2970;&#3009</option>" ],
				[ "<OPTION VALUE='65' >065. &#2970;&#3018&#2994;&#3021;&#2997;&#2985;à¯&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='66' >066. &#2997;&#3007;&#2985;&#3016;&#2980;à¯&#2980;&#3010;&#2991;&#3021;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='67' >067. &#2997;&#3007;&#2985;&#3016;&#2980;à¯&#2980;&#3007;&#2975;&#3021;&#2986;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='68' >068. &#2997;&#3007;&#2985;&#3016; &#2970;&#3014&#2991;&#2994;&#3021;&#2997;&#2965;&#2965;&#3016;</option>" ],
				[ "<OPTION VALUE='69' >069. &#2980;&#3010;&#2980;&#3009;</option>" ],
				[ "<OPTION VALUE='70' >070. &#2990;&#2985;à¯&#2985;&#2992;&#3016;&#2970;&#3021; &#2970;&#3015&#2992;&#3021;&#2984;&#3021;&#2980;&#3009; &#2962;&#2996;&#3009;&#2965;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='71' >071. &#2965;&#3009;&#2993;&#3007;&#2986;&#3021;&#2986;&#3009 &#2949;&#2993;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='72' >072. &#2949;&#2997;&#3016; à®…&#2993;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='73' >073. &#2949;&#2997;&#3016; à®…&#2974;&#3021;&#2970;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='74' >074. &#2984;&#3006;&#2975;&#3009;</option>" ],
				[ "<OPTION VALUE='75' >075. &#2949;&#2992;&#2979;&#3021;</option>" ],
				[ "<OPTION VALUE='76' >076. &#2986;&#3018&#2992;&#3009;&#2995;&#3021; &#2970;&#3014&#2991;&#2994;&#3021;&#2997;&#2965;&#2965;&#3016;</option>" ],
				[ "<OPTION VALUE='77' >077. &#2986;&#2975;&#3016;&#2990;&#3006;&#2975;&#3021;&#2970;&#3007</option>" ],
				[ "<OPTION VALUE='78' >078. &#2986;&#2975;&#3016;&#2970;&#3021;&#2970;&#3014&#2992;&#3009;&#2965;à¯&#2965;&#3009;</option>" ],
				[ "<OPTION VALUE='79' >079. &#2984;&#2975;&#3021;&#2986;&#3009</option>" ],
				[ "<OPTION VALUE='80' >080. &#2984;&#2975;&#3021;&#2986;&#3009  &#2950;&#2992;&#3006;&#2991;&#3021;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='81' >081. &#2986;&#2996;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='82' >082 &#2980;&#3008; &#2984;&#2975;&#3021;&#2986;&#3009</option>" ],
				[ "<OPTION VALUE='83' >083. &#2965;&#3010;&#2975;&#3006; &#2984;&#2975;&#3021;&#2986;&#3009</option>" ],
				[ "<OPTION VALUE='84' >084. &#2986;&#3015&#2980;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='85' >085. &#2986;&#3009&#2994;&#3021;&#2994;&#2993;&#3007;&#2997;&#3006;&#2979;&#3021;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='86' >086. &#2951;&#2965;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='87' >087. &#2986;&#2965;&#2965;&#3016; &#2990;&#3006;&#2975;&#3021;&#2970;&#3007</option>" ],
				[ "<OPTION VALUE='88' >088. &#2986;&#2965;&#2965;&#3016;&#2980;à¯&#2980;&#3007;&#2993;&#2990;&#3021; &#2980;&#3014;&#2992;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='89' >089. &#2953;&#2975;&#3021;&#2986;&#2965;&#2965;&#3016;</option>" ],
				[ "<OPTION VALUE='90' >090. &#2986;&#3014&#2992;&#3007;&#2991;&#3006;&#2992;&#3016;&#2986;&#3021; &#2986;&#3007&#2996;&#3016;&#2991;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='91' >091. &#2986;&#3014&#2979;&#3021;&#2997;&#2996;&#3007;&#2970;&#3021; &#2970;&#3015&#2993;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='92' >092. &#2997;&#2992;&#3016;&#2997;&#3007;&#2994;&#3021; &#2990;&#2965;&#2995;&#3007;&#2992;&#3021;</option>" ],
				[ "<OPTION VALUE='93' >093. &#2965;&#2995;&#3021; &#2953;&#2979;&#3021;&#2979;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='94' >094. &#2970;&#3010&#2980;&#3009;</option>" ],
				[ "<OPTION VALUE='95' >095. &#2990;&#2992;&#3009;&#2984;&#3021;&#2980;&#3009;</option>" ],
				[ "<OPTION VALUE='96' >096. &#2965;&#3009;&#2975;&#3007;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='97' >097. &#2990;&#3006;&#2985;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='98' >098. &#2986;&#3014&#2992;&#3009;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='99' >099. &#2970;&#3006;&#2985;à¯&#2993;&#3006;&#2979;&#3021;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='100' >100. &#2986;&#2979;&#3021;&#2986;&#3009&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='101' >101. &#2984;&#2985;à¯&#2993;&#3007;&#2991;&#3007;&#2994;&#3021; &#2970;&#3014&#2994;&#3021;&#2997;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='102' >102. &#2984;&#3006;&#2979;&#3021; &#2953;&#2975;&#3016;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='103' >103. &#2965;&#3009;&#2975;&#3007; &#2970;&#3014&#2991;&#2994;&#3021;&#2997;&#2965;&#2965;&#3016;</option>" ],
				[ "<OPTION VALUE='104' >104. &#2953;&#2996;&#2997;&#3009;</option>" ],
				[ "<OPTION VALUE='105' >105. &#2984;&#2994;&#3021;&#2965;&#3009;&#2992;&#2997;&#3009;</option>" ],
				[ "<OPTION VALUE='106' >106. &#2951;&#2992;&#2997;&#3009;</option>" ],
				[ "<OPTION VALUE='107' >107. &#2951;&#2992;&#2997;&#2970;&#3021;&#2970;&#2990;&#3021;</option>" ],
				[ "<OPTION VALUE='108' >108. &#2965;&#2991;&#2990;&#3016;</option>" ],
				[ "<option disabled='disabled' class='clsOption'>&#2965;&#3006;&#2965;&#3006;&#2990;&#2980;à¯&#2980;&#3009;&#2986;&#3021;&#2986;&#3006&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='109' >109. &#2980;&#2965;&#2965;&#3016;&#2991;&#2979;&#2969;à¯&#2965;&#3009;&#2993;&#3009;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='110' >110. &#2965;&#3009;&#2993;&#3007;&#2986;&#3021;&#2986;&#2993;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='111' >111. &#2986;&#3009&#2979;&#2992;&#3021;&#2970;&#3021;&#2970;&#3007 &#2990;&#2965;&#3007;&#2996;&#3021;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='112' >112. &#2984;&#2994;&#2990;&#3021; &#2986;&#3009&#2985;&#3016;&#2984;&#3021;&#2980;&#3009; &#2953;&#2992;&#3016;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='113' >113. &#2965;&#3006;&#2965;&#3006;&#2980;&#2993;&#3021; &#2970;&#3007&#2993;&#2986;&#3021;&#2986;&#3009 &#2953;&#2992;&#3016;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='114' >114. &#2984;&#3006;&#2979;&#3009;&#2980;à¯ &#2980;&#3009;&#2993;&#2997;&#3009; &#2953;&#2992;&#3016;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='115' >115. &#2949;&#2994;&#2992;&#3021; à®…&#2993;&#3007;&#2997;&#3009;&#2993;&#3009;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='116' >116. &#2986;&#3007&#2992;&#3007;&#2997;&#3006;&#2993;&#3021;&#2993;&#3006;&#2990;&#3016;</option>" ],
				[ "<OPTION VALUE='117' >117. &#2986;&#2975;&#2992;&#3021; &#2990;&#3014;&#2994;&#3007&#2984;&#3021;&#2980;&#3009; &#2951;&#2992;&#2969;à¯&#2965;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='118' >118. &#2965;&#2979;&#3021; &#2997;&#3007;&#2980;&#3009;&#2986;&#3021;&#2986;&#3009 &#2949;&#2996;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='119' >119. &#2986;&#2970;&#2986;&#3021;&#2986;&#3009 &#2953;&#2993;&#3009; &#2986;&#2992;&#3009;&#2997;&#2992;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='120' >120. &#2980;&#2985;&#3007;&#2986;&#3021;&#2986;&#2975;&#2992;&#3021; &#2990;&#3007;&#2965;&#3009;&#2980;&#3007;</option>" ],
				[ "<OPTION VALUE='121' >121. &#2984;&#3007;&#2985;&#3016;&#2984;&#3021;&#2980;&#2997;&#2992;&#3021; &#2986;&#3009&#2994;&#2990;&#3021;&#2986;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='122' >122. &#2965;&#2985;&#2997;&#3009; &#2984;&#3007;&#2994;&#3016 &#2953;&#2992;&#3016;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='123' >123. &#2986;&#3018&#2996;&#3009;&#2980;&#3009; &#2965;&#2979;&#3021;&#2975;&#3009; &#2951;&#2992;&#2969;à¯&#2965;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='124' >124. &#2953;&#2993;&#3009;&#2986;&#3021;&#2986;&#3009 &#2984;&#2994;&#2985;à¯ &#2949;&#2996;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='125' >125. &#2984;&#3014;&#2974;&#3021;&#2970;&#3018&#2975;&#3009; &#2965;&#3007;&#2995;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='126' >126. &#2984;&#3007;&#2993;&#3016; &#2949;&#2996;&#3007;&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='127' >127. &#2949;&#2997;&#2992;&#3021;&#2997;&#2991;&#3007;&#2985;à¯ &#2997;&#3007;&#2980;&#3009;&#2990;&#3021;&#2986;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='128' >128. &#2965;&#3009;&#2993;&#3007;&#2986;&#3021;&#2986;&#3009 &#2949;&#2993;&#3007;&#2997;&#3009;&#2993;&#3009;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='129' >129. &#2986;&#3009&#2979;&#2992;&#3021;&#2970;&#3021;&#2970;&#3007 &#2997;&#3007;&#2980;&#3009;&#2990;&#3021;&#2986;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='130' >130. &#2984;&#3014;&#2974;&#3021;&#2970;&#3018&#2975;&#3009; &#2986;&#3009&#2994;&#2980;à¯&#2980;&#2994;&#3021;</option>" ],
				[ "<OPTION VALUE='131' >131. &#2986;&#3009&#2994;&#2997;&#3007;</option>" ],
				[ "<OPTION VALUE='132' >132. &#2986;&#3009&#2994;&#2997;&#3007; &#2984;&#3009;&#2979;&#3009;&#2965;à¯&#2965;&#2990;&#3021;</option>" ],
				["<OPTION VALUE='133' >133.  &#2954;&#2975;&#2994;&#3021; &#2953;&#2997;&#2965;&#3016;</option>"],
	];
	document.write( "<B><U></B></U> <SELECT AUTOFOCUS onchange=\"DISPLAY_REQUIRED_POSTOFFICE_INTEREST("+DefaultVal+")\" name='thirukkural' id='thirukkural_id'>");
	for( i =0; arr_options.length-1 > i; ++i )
	{
		document.write( arr_options[i] );
	}
	document.write( "</SELECT>");
}
