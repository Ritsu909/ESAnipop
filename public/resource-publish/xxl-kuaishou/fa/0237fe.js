// 打包配置文件
// key为包名，支持子目录，请尽量使用有意义的包名
// value为文件列表，支持plist、fnt、csb

// 程序中加载器会自动加载plist和fnt的同名png

// 文件将会被打包至resource/packed
// 故程序中引用包体时需加上目录packed/
// 如：使用 plist.pack 需写为 packed/plist.pack

module.exports = {
    "text.pack": [
        "text/zh_CN/activity.strings",
        "text/zh_CN/error.strings",
        "text/zh_CN/panel.strings",
        "text/zh_CN/prop.strings",
        "text/zh_CN/tutorial.strings"
    ],

    "levelExtPlist.pack": [
        "cocos/gameScene.plist",

        "flash/mapTiles.plist",
        "flash/chicken.plist",
        "flash/fox.plist",
        "flash/horse.plist",
        "flash/frog.plist",
        "flash/bear.plist",
        "flash/cat.plist",

        // 已合并
        "flash/animal_special_effect.plist",

        "flash/mapBaseItem.plist"
    ],
    "LevelExtFnt.pack": [
        // "font/target.fnt",
        // "font/zzgftongxin_40.fnt",
        // "font/berlinsansfb_30.fnt",
        // "font/berlinsansfb_70_white_redtroke.fnt",
        // // "font/berlinsansfb_30_bluestroke.fnt",
        // "font/berlinsansfb_40_withshadow.fnt",
        // "font/berlinsansfb_70_bluestroke.fnt",
        // "font/zzgftongxin_40_greenstroke.fnt",
        // "font/berlinsansfb_40_brownstroke.fnt",
        // "font/zzgftongxin_40_aquastroke.fnt",
        // "font/zzgftongxin_40_brownstroke.fnt",
        // "font/zzgftongxin_32_redstroke.fnt",
        "font/berlinsansfb_25_brownstroke.fnt" // 格子角标分数
    ],
    "plist.pack": [
        "cocos/uilibrary.plist",
        "cocos/game_guide.plist",
        "cocos/h5library.plist",
        "packed/allhome.pack"
    ],

    "allhome.pack": [
        "cocos/island_anim_star.csb",
        "cocos/island_anim_starani.csb",
        "cocos/island_btn_anim_anim.csb",
        "cocos/island_btn_anim_level.csb",
        "cocos/island_anim_star_1_anim.csb",
        "cocos/island_btn_anim_level_text.csb",
        "cocos/island_btn_anim_particle.csb",
        "cocos/island_btn_anim_start_btn_kuangkuang.csb",
        "cocos/user_button_button.csb",
        "cocos/star_box_button_button.csb",
        "cocos/star_chest_button_anim.csb",
        "cocos/island_btn_anim_start_btn_particle.csb",

        // data
        "packed/meta/meta_client.json",
        "meta/level_digest.json",
        "meta/item_def.json",

        // 流畅模式面板
        "cocos/setting_panel_smooth.csb",

        "cocos/uilibrary_rankcrown_anim2.csb",

        "cocos/homeScene_task_button.csb",
        "cocos/homeScene_user_info.csb",

        "cocos/redbag_redbag_icon.csb", //宝箱

        "cocos/homeScene_energy_progress.csb",
        "cocos/homeScene_box.csb",
        "cocos/homeScene_number99.csb",
        "cocos/homeScene_starrankicon.csb",
        "cocos/homeScene_energy_btn.csb",
        "cocos/homeScene_cash_btn.csb",
        "cocos/homeScene_coin_btn.csb",
        "cocos/homeSceneBall_home_scene_ball.csb",
        "cocos/uilibrary_bubble_unlock.csb",
        "cocos/uilibrary_bubble_use.csb",
        "cocos/uilibrary_starsstar_blueglow.csb",

        "cocos/level_panel_start_panel.csb",
        "cocos/level_panel_rank_btn.csb",
        "cocos/level_panel_bottom_btn_close.csb",
        "cocos/level_panel_bottom_btn_question2.csb",
        "cocos/level_panel_bottom_startuistartbottommmm.csb",
        "cocos/level_panel_rank_add.csb",
        "cocos/level_panel_energy_container.csb",
        "cocos/level_panel_bottom_btn_add.csb",
        "cocos/uilibrary_rankcrown_anim1.csb",

        "cocos/properties_numlabelmultibg.csb",
        "cocos/homeScene_glowanime.csb",
        "cocos/homeScene_infiniteEnergy.csb",
        "cocos/homeScene_friend2_btn.csb",
        "cocos/homeScene_info_btn.csb",
        "cocos/homeScene_bag_btn.csb",
        "cocos/homeScene_mes_btn.csb",
        "cocos/homeScene_set_btn.csb",
        "cocos/homeScene_faq_btn.csb",
        "cocos/hide_island_tip.csb",
        "cocos/homeAnim_bubblemaker_bubblemaker_mirror.csb",
        "cocos/homeAnim_bubblemaker_bubblemaker.csb",
        "cocos/homeAnim_bubblemaker_bubbleanim.csb",
        "cocos/homeAnim_bubblemaker_bubbleanim2.csb",
        "cocos/homeAnim_bubblemaker_multi_bubbles.csb",
        "cocos/homeAnim_bubblemaker_multi_bubbles_inner.csb",
        "cocos/homeAnim_fish_fish_animation_all.csb",
        "cocos/homeAnim_fish_fish_xiaochou_animation.csb",
        "cocos/homeAnim_fish_fish_long_animation.csb",
        "cocos/homeAnim_fish_fish_blue_animation.csb",
        "cocos/uilibrary_starstar_redglow.csb",
        "cocos/homeScene_head_icon_group.csb",
        "cocos/homeScene_inviteicon_getbonus.csb",
        "cocos/homeScene_inviteicon_normal.csb",
        "cocos/starFly_water_round_level_node.csb",
        "cocos/starFly_star_eff_ani.csb",
        "cocos/homeScene_icon_shop.csb",

        "cocos/homeScene_icon_signIn.csb",
        "cocos/fly_prop_animation_coingot.csb",
        "cocos/fly_prop_animation_coingot_splash.csb",
        "cocos/energy_panel_energyPanel.csb",
        "cocos/energy_panel_bottom_btn_green_start2.csb",
        "cocos/energy_panel_btn_blue_start.csb",
        "cocos/energy_panel_bottom_btn_close.csb",
        "cocos/energy_panel_askbutton.csb",
        "cocos/energy_panel_prompt.csb",
        "cocos/energy_panel_remind_panel.csb",
        "cocos/energy_panel_bottom_btn_green_start.csb",

        "cocos/uilibrary_bubble_unlock1.csb",
        "cocos/unlock_anim_red_anim_disappear.csb",
        "cocos/uilibrary_newer_button.csb",

        "cocos/new_user_reward_panel_newRewardPanel.csb",
        "cocos/new_user_reward_panel_bottom_btn_green_start.csb",

        "cocos/uilibrary_howmuchoffall.csb",
        "cocos/preprop_panel_prepropPanel.csb",
        "cocos/preprop_panel_bottom_offbottom_light_x.csb",

        "cocos/homeScene_user_info_l.csb",
        "cocos/homeScene_mark_prise.csb",

        "cocos/pass_all_level_panel_panel.csb",
        "cocos/pass_all_level_panel_bottom_btn_green_start.csb",
        "cocos/pass_all_level_panel_bottom_btn_close.csb",
        "cocos/mark_panel_starglow.csb",

        "cocos/fly_prop_animation_cashgot.csb",
        "cocos/shake_animation_boom.csb",
        "cocos/shake_animation_boom_animation.csb",
        "cocos/shake_animation_star_animation.csb",
        "cocos/fly_prop_animation_star_animat.csb",

        "cocos/homeScene_user_info.csb",

        // 周赛
        "cocos/homeScene_changlongIcon.csb",
        "cocos/homeScene_magicgroup.csb",
        "cocos/homeScene_weekmatch.csb",
        "cocos/homeScene_wjo.csb",

        // 好友排行
        "cocos/homeScene_star_anim.csb",

        // 悬赏fix
        "cocos/market_panel_bottom_btn_blue_start2.csb",

        "cocos/activities_button_icon_anim.csb",
        "cocos/activities_button_star_ready.csb",

        "cocos/share_panel_share.csb",
        "cocos/share_panel_timelineButton.csb",
        "cocos/share_panel_sessionButton.csb"
    ],

    "levelComCsb.pack": [
        "cocos/gameScene_PropBar.csb",
        "cocos/gameScene_lightline.csb",
        "cocos/gameScene_head.csb",
        "cocos/gameScene_label.csb",
        "cocos/gameScene_progress.csb",
        "cocos/gameScene_StepCounter.csb",
        "cocos/gameScene_lv222.csb",
        "cocos/gameScene_star1.csb",
        "cocos/gameScene_star3.csb",
        "cocos/gameScene_star4.csb",
        "cocos/gameScene_aim_panel.csb",
        "cocos/properties_bubble.csb",
        "cocos/gameScene_show.csb",
        "cocos/gameScene_show2.csb",
        "cocos/gameScene_light.csb",
        "cocos/gameScene_star.csb",
        "cocos/gameScene_bonustime_word.csb"
    ],

    "prepropRecordPanel.pack": [
        //银币加三步
        "cocos/preprop_recommend_panel_panel.csb",
        "cocos/preprop_recommend_panel_bottom_btn_blue_start2.csb",
        "cocos/preprop_recommend_panel_bottom_offbottom_light_x.csb",
        "cocos/preprop_recommend_panel_btn_green_buy.csb",
        "cocos/preprop_recommend_panel.plist",
        "cocos/prop_anim.plist",
        "cocos/prop_anim_prop_anim_10011.csb",
        "cocos/prop_anim_prop_anim_10008.csb",
        "cocos/prop_anim_prop_anim_10009.csb",
        "font/berlinsansfb_50.fnt",
        "font/zzgftongxin_30.fnt"
    ],

    "orderMapNeedAssets.pack": [],

    "IceMapNeedAssets.pack": [
        "materials/ice_mode_target.plist",

        "flash/sea_animal.plist",
        "flash/mapLight.plist",

        "cocos/ice_box.plist",
        "cocos/ice_chick.plist",
        "cocos/background_ice.plist",
        "cocos/polar_bear.plist",

        "cocos/ice_chick_chick_animation_stay.csb",
        "cocos/ice_chick_chick_animation_start.csb",

        "cocos/racoon_come_come.csb",

        "cocos/polar_bear_polarbear_lose.csb",
        "cocos/polar_bear_polarbear_open.csb",
        "cocos/polar_bear_polarbear_score1.csb",
        "cocos/polar_bear_polarbear_stay.csb",
        "cocos/polar_bear_polarbear_stay_1.csb",
        "cocos/polar_bear_polarbear_win.csb",
        "cocos/polar_bear_polarbear_win_loop.csb",
        "cocos/polar_bear_polarbear_lose.csb",
        "cocos/polar_bear_polarbear_score_effect.csb",
        "cocos/polar_bear_polarbear_shinydots_move_single.csb",
        "cocos/polar_bear_polarbear_smoke_move.csb",

        "cocos/background_ice_bg.csb",
        "cocos/background_ice_polarbear_shinegrps.csb",
        "cocos/background_ice_polarbear_wave02all.csb",
        "cocos/background_ice_polarbear_sunshineAnimation.csb",

        "cocos/ice_chick_ice_crame_up.csb",
        "cocos/ice_chick_ice_crame_all.csb",
        "cocos/ice_chick_ice_crame_a_down.csb",
        "cocos/ice_chick_icecream_animation2.csb",
        "cocos/ice_chick_icecream_animation.csb",
        "cocos/ice_chick_icecream_animation_fruite.csb",
        "cocos/ice_chick_xuehuaboom.csb",
        "cocos/ice_chick_chick_animation_jump_1.csb",
        "cocos/ice_chick_chick_animation_come.csb",
        "cocos/ice_chick_chick_animation_go.csb",
        "cocos/ice_chick_chick_animation_go2.csb",
        "cocos/ice_chick_chick_animation_score_n2.csb",
        "cocos/ice_chick_chick_animation_win.csb",
        "cocos/ice_chick_chick_animation_movehead.csb",
        "cocos/ice_chick_chick_animation_lose.csb",
        "cocos/ice_chick_polarbear_BALL.csb",
        "cocos/ice_chick_fruite_red.csb",

        "cocos/ice_chick_ice_line1.csb",
        "cocos/ice_chick_ice_line2.csb",
        "cocos/ice_chick_ice_line3.csb",

        "cocos/ice_box_fridge_up.csb",
        "cocos/ice_box_iceairlineanime.csb",
        "cocos/ice_box_board_animation.csb",

        // 苏打水
        "cocos/sodaAnim_lid_animation.csb",
        "cocos/sodaAnim_penshe.csb"
    ],

    "FishMapNeedAssets.pack": [
        "flash/fish_combine.plist",
        "flash/stone_combine.plist",
        "flash/water.plist",
        "flash/water_decor.plist",
        "materials/bg_fish.plist",
        "cocos/fish_ship_ship.csb",
        "cocos/fish_ship_wavexanime.csb",
        "cocos/fish_ship_wavexanime2.csb",
        "cocos/fish_ship_fish_target_bubble.csb",
        "cocos/fish_chick_stay_stay.csb",
        "cocos/fish_racoon_stay_stay.csb",
        "cocos/fish_racoon_stay_racoon_racoon_eyeinside2.csb",
        "cocos/fish_chick_score_score.csb",
        "cocos/fish_racoon_score_score.csb",
        "cocos/fish_chick_struggle_struggle.csb",
        "cocos/fish_racoon_struggle_struggle.csb",
        "cocos/fish_chick_finish_finish.csb",
        "cocos/fish_racoon_finish_finish.csb",
        "cocos/fish_chick_beforewin_beforewin.csb",
        "cocos/fish_racoon_beforewin_beforewin.csb",
        "cocos/fish_chick_win_win.csb",
        "cocos/fish_racoon_win_win.csb",
        "cocos/fish_chick_lose_lose.csb",
        "cocos/fish_racoon_lose_lose.csb",
        "cocos/fish_chick_lose_chick_water.csb",
        "cocos/fish_racoon_lose_water.csb",
        "cocos/fish_chick_look_look.csb",
        "cocos/fish_racoon_look_look.csb",
        "cocos/fish_racoon_wait_wait.csb",
        "cocos/fish_chick_wait_wait.csb",
        "cocos/fish_chick_wait_fishgrp.csb",
        "cocos/fish_chick_wait_chick_fishjump.csb",
        "cocos/fish_chick_wait_chick_fishjump2.csb",
        "cocos/fish_chick_wait_chick_fishjump3.csb"
    ],

    "BossMapCommonNeedAssets.pack": [
        "cocos/boss_bg.plist",
        "font/berlinsansfb_25_bluestroke.fnt",
        "font/berlin_sans_fb_demi_outline.fnt",
        "font/number_red_white.fnt",
        "cocos/boss_bg_boss_bg.csb",
        "cocos/boss_small_bee_bee.csb",
        "cocos/boss_big_bee_bee.csb",
        "cocos/boss_beat_bee_bee.csb",
        "cocos/boss_effect_water_drop_animation.csb",

        "cocos/last_boss_come_animation_final_boss_1.csb",
        "cocos/boss_big_skill_skill.csb",
        "cocos/damage_list_panel_animation.csb",
        "cocos/damage_list_panel_cell_diban.csb",
        "cocos/damage_list_panel_damage_list_c.csb",
        "cocos/damage_list_panel_damage_cell.csb",

        "cocos/boss_common_res.plist"
    ],

    "BigBossMapNeedAssets.pack": [
        "cocos/boss_big_idle_idle.csb",
        "cocos/boss_big_beat_beat.csb",
        "cocos/boss_big_die_die.csb",
        "cocos/boss_big_enter_enter.csb",
        "cocos/boss_big_wait_wait.csb",
        "cocos/boss_big_wait2_wait2.csb",
        "cocos/boss_big_attack_attack.csb",
        "cocos/boss_big_attack_attack_effect.csb",
        "cocos/boss_big_attack2_attack2.csb",
        "cocos/boss_big_skill_skill.csb",
        "cocos/boss_big_beat_1_beat_1.csb",
        "cocos/boss_big_beat_2_beat_2.csb",
        "cocos/boss_big_cry_cry.csb",
        "cocos/boss_big_cry_cry_loop.csb",

        "cocos/boss_big_attack_Octopus_eye_idle_blink.csb",
        "cocos/boss_big_attack_Octopus_splashdorp_grp.csb",
        "cocos/boss_big_attack_Octopus_splashdrop_move.csb",
        "cocos/boss_big_attack2_Octopus_splashdorp_grp.csb",
        "cocos/boss_big_attack2_Octopus_splashdrop_move.csb",
        "cocos/boss_big_bee_bee.csb",
        "cocos/boss_big_bee_Octopus_water.csb",
        "cocos/boss_big_cry_Octopus_eye_idle_blink.csb",
        "cocos/boss_big_die_Octopus_splashdorp_grp.csb",
        "cocos/boss_big_die_Octopus_splashdrop_move.csb",
        "cocos/boss_big_enter_Octopus_splashdorp_grp.csb",
        "cocos/boss_big_enter_Octopus_splashdrop_move.csb",
        "cocos/boss_big_idle_Octopus_eye_idle_blink.csb",
        "cocos/boss_big_wait2_Octopus_eye_idle_blink.csb"
    ],

    "SmallBossMapNeedAssets.pack": [
        "cocos/boss_small_enter_Octopus_splashdorp_grp.csb",
        "cocos/boss_small_enter_Octopus_splashdrop_move.csb",
        "cocos/boss_small_idle_Octopus_eye_idle_blink.csb",
        "cocos/boss_small_beat_1_beat_1.csb",
        "cocos/boss_small_beat_2_beat_2.csb",
        "cocos/boss_small_beat_2_Octopus_splashdorp_grp.csb",
        "cocos/boss_small_beat_2_Octopus_splashdrop_move.csb",
        "cocos/boss_small_beat_beat.csb",
        "cocos/boss_small_beat_Octopus_splashdorp_grp.csb",
        "cocos/boss_small_beat_Octopus_splashdrop_move.csb",
        "cocos/boss_small_bee_bee.csb",
        "cocos/boss_small_cry_cry.csb",
        "cocos/boss_small_die_die.csb",
        "cocos/boss_small_die_Octopus_splashdorp_grp.csb",
        "cocos/boss_small_die_Octopus_splashdrop_move.csb",
        "cocos/boss_small_enter_enter.csb",
        "cocos/boss_small_idle_idle.csb",
        "cocos/boss_small_idle_Octopus_eye_idle_blink.csb",
        "cocos/boss_small_wait_wait.csb"
    ],

    "BlockCollectionMapNeedAssets.pack": [
        "materials/blco_target.plist",
        "cocos/block_collection_machine.plist",
        "cocos/blco_horse_win.plist",

        "cocos/block_collection_machine_single_animal.csb",

        "cocos/blco_cat_celebrate_blco_cat_celebrate.csb",
        "cocos/blco_cat_lose_blco_cat_lose.csb",
        "cocos/blco_cat_hold_blco_cat_hold.csb",
        "cocos/blco_cat_operate_blco_cat_operate.csb",
        "cocos/blco_cat_win_blco_cat_win.csb",
        "cocos/blco_cat_lookat_blco_cat_lookat.csb",
        "cocos/blco_cat_pat_blco_cat_pat.csb",
        "cocos/blco_frog_win_ooo.csb",
        "cocos/blco_frog_get_blco_frog_get.csb",
        "cocos/blco_frog_lookup_blco_frog_lookup.csb",
        "cocos/blco_frog_waitfor_blco_frog_waitfor.csb",
        "cocos/blco_frog_lose_blco_frog_lose.csb",
        "cocos/blco_frog_win_blco_frog_win.csb",
        "cocos/blco_frog_lookdown_blco_frog_lookdown.csb",
        "cocos/blco_frog_point_blco_frog_point.csb",
        "cocos/blco_horse_agree_blco_horse_agree.csb",
        "cocos/blco_horse_lookup_blco_horse_lookup.csb",
        "cocos/blco_horse_win_blco_horse_win.csb",
        "cocos/blco_horse_get_blco_horse_get.csb",
        "cocos/blco_horse_lose_blco_horse_lose.csb",
        "cocos/blco_horse_lookdown_blco_horse_lookdown.csb",
        "cocos/blco_horse_waitfor_blco_horse_waitfor.csb",
        "cocos/block_collection_machine_block_collection_machine.csb"
    ],

    "WaterDigMapNeedAssets.pack": [
        "flash/dropdig_low.plist",
        "flash/waterdig.plist",
        "flash/waterdig_water.plist",
        "cocos/water_dig_in_pre.plist",
        "cocos/water_dig_mode.plist",
        "cocos/water_bubble.plist",
        "cocos/water_dig_fish.plist",
        "cocos/water_dig_in_pre_turtle1.csb",
        "materials/water_dig_target.plist",
        "cocos/water_dig_in_pre_turtle2.csb",
        "cocos/water_dig_in_pre_jellyfish.csb",
        "cocos/water_dig_in_pre_fufen1.csb",
        "cocos/water_dig_in_pre_fiishgroupanime.csb",
        "cocos/water_dig_in_pre_fiishgroupanime1.csb",
        "cocos/water_dig_in_pre_fiishgroupanime2.csb",
        "cocos/water_dig_frog_photography_frog_photography.csb",
        "cocos/water_bubble_animation_bubble.csb",
        "cocos/water_dig_frog_godown_frog_godown.csb",
        "cocos/water_dig_chick_godown_chick_godown.csb",
        "cocos/water_dig_frog_godown_eye_blinke.csb",
        "cocos/water_dig_in_pre_allbubbles.csb",
        "cocos/water_dig_frog_idle_frog_idle.csb",
        "cocos/water_dig_in_pre_bubbleanimeall.csb",
        "cocos/water_dig_in_pre_aaaaa.csb",
        "cocos/water_dig_chick_idle_chick_idle.csb",
        "cocos/water_dig_frog_idle_eye_blinke.csb",
        "cocos/water_dig_chick_idle_chick_eye_binke.csb",
        "cocos/water_dig_chick_godown_chick_eye_binke.csb",
        "cocos/water_dig_frog_win_before_frog_win_before.csb",
        "cocos/water_dig_frog_win_frog_win.csb",
        "cocos/water_dig_frog_lose_frog_lose.csb",
        "cocos/water_dig_chick_takephoto_chick_photography2.csb",
        "cocos/water_dig_chick_win_before_chick_win_before.csb",
        "cocos/water_dig_chick_win_chick_win.csb",
        "cocos/water_dig_chick_lose_chick_lose.csb",
        "cocos/water_dig_fish_water_dig_fish.csb",
        "cocos/water_dig_chick_lose_chick_eye_binke.csb",
        "cocos/water_dig_fish_fish.csb"
    ],

    "WeeklyMapNeedAssets.pack": [
        "cocos/weekly_race.plist",
        "cocos/weekly_bg.plist",
        "cocos/weekly_ball.plist",
        "cocos/weekly_end_level.plist",
        "cocos/share_weekGameRewardBox.plist",

        "flash/rabbit.plist",

        "cocos/weekly_ball_light_point_star.csb",
        "cocos/weekly_ball_particle_all.csb",
        "cocos/weekly_ball_particle_water.csb",
        "cocos/weekly_ball_side_light.csb",
        "cocos/weekly_ball_softstarup.csb",
        "cocos/weekly_ball_starcircle.csb",
        "cocos/weekly_ball_water_up.csb",
        "cocos/weekly_end_box_boxinl.csb",
        "cocos/weekly_end_box_box_down.csb",
        "cocos/weekly_end_box_box_up.csb",
        "cocos/weekly_end_level_btn_ok.csb",
        "cocos/weekly_end_level_panel.csb",
        "cocos/weekly_end_level_titile_jiangli_animation.csb",
        "cocos/weekly_end_light_boom_blue.csb",
        "cocos/weekly_end_light_boom_yellow.csb",
        "cocos/weekly_end_light_starani.csb",
        "cocos/weekly_end_rabbit_disappear.csb",
        "cocos/weekly_fox_end_npc.csb",
        "cocos/weekly_fox_idle_npc.csb",
        "cocos/weekly_fox_next_level_npc.csb",
        "cocos/weekly_fox_score_before_npc.csb",
        "cocos/weekly_fox_score_npc.csb",
        "cocos/weekly_frog_end_npc.csb",
        "cocos/weekly_frog_idle_npc.csb",
        "cocos/weekly_frog_next_level_npc.csb",
        "cocos/weekly_frog_score_before_npc.csb",
        "cocos/weekly_frog_score_npc.csb",
        "cocos/weekly_rabbit_runaway_npc.csb",
        "cocos/weekly_race_tip.csb",

        "flash/link_item.plist",
        "flash/ice_chain.plist",
        "flash/transfer.plist",
        "cocos/boss_common_res.plist",

        //以下资源与native的WeeklyDependingAssets相对应
        "flash/crystal_anim.plist",
        "flash/coin.plist",
        "flash/mapLock.plist",
        "flash/var_snow.plist",
        "flash/various_box.plist",
        "flash/moveTile.plist", //71008 used
        "flash/venom.plist"
    ],

    "PursueMapNeedAssets.pack": [
        "flash/pursue_role.plist",
        "cocos/pursue_target_qixi.plist",
        "cocos/pursue_target_qixi_res.plist",
        "cocos/pursue_star_bomb.plist",

        "cocos/pursue_target_qixi_qixi_target_board.csb",

        "cocos/pursue_target_qixi_hippo_idle_npc.csb",
        "cocos/pursue_target_qixi_hippo_score_npc.csb",
        "cocos/pursue_target_qixi_hippo_lose_npc.csb",
        "cocos/pursue_target_qixi_hippo_win_npc.csb",

        "cocos/pursue_target_qixi_fox_idle_npc.csb",
        "cocos/pursue_target_qixi_fox_score_npc.csb",
        "cocos/pursue_target_qixi_fox_lose_npc.csb",
        "cocos/pursue_target_qixi_fox_win_npc.csb",

        "cocos/pursue_star_bomb_pursue_star_boom.csb",
        "cocos/pursue_star_bomb_star_com_1.csb",

        "cocos/pursue_target_qixi_bug_animation.csb",
        "cocos/pursue_target_qixi_heart_all.csb",
        "cocos/pursue_target_qixi_heart_fly.csb",

        "cocos/pursue_win_1_racoon_light.csb",
        "cocos/pursue_win_1_shining1.csb",
        "cocos/pursue_win_1_heart_all_ani.csb",
        "cocos/pursue_target_qixi_star_bug_one.csb"
    ],

    "BaseSurfringCatNeedAssets.pack": [
        "cocos/SurfingCat_res.plist",

        "cocos/SurfingCat_1_h_level_1.csb",
        "cocos/SurfingCat_1_h_level_1_reset.csb",
        "cocos/SurfingCat_1_h_level_1_upgrade.csb",
        "cocos/SurfingCat_1_h_level_2.csb",
        "cocos/SurfingCat_1_h_level_2_upgrade.csb",
        "cocos/SurfingCat_1_h_level_3.csb",
        "cocos/SurfingCat_1_h_level_3_upgrade.csb",
        "cocos/SurfingCat_1_v_level_1.csb",
        "cocos/SurfingCat_1_v_level_1_reset.csb",
        "cocos/SurfingCat_1_v_level_1_upgrade.csb",
        "cocos/SurfingCat_1_v_level_2.csb",
        "cocos/SurfingCat_1_v_level_2_upgrade.csb",
        "cocos/SurfingCat_1_v_level_3.csb",
        "cocos/SurfingCat_1_v_level_3_upgrade.csb",
        "cocos/SurfingCat_2_h_level_1.csb",
        "cocos/SurfingCat_2_h_level_1_reset.csb",
        "cocos/SurfingCat_2_h_level_1_upgrade.csb",
        "cocos/SurfingCat_2_h_level_2.csb",
        "cocos/SurfingCat_2_h_level_2_upgrade.csb",
        "cocos/SurfingCat_2_h_level_3.csb",
        "cocos/SurfingCat_2_h_level_3_upgrade.csb",
        "cocos/SurfingCat_2_v_level_1.csb",
        "cocos/SurfingCat_2_v_level_1_reset.csb",
        "cocos/SurfingCat_2_v_level_1_upgrade.csb",
        "cocos/SurfingCat_2_v_level_2.csb",
        "cocos/SurfingCat_2_v_level_2_upgrade.csb",
        "cocos/SurfingCat_2_v_level_3.csb",
        "cocos/SurfingCat_2_v_level_3_upgrade.csb",
        "cocos/SurfingCat_3_h_level_1.csb",
        "cocos/SurfingCat_3_h_level_1_reset.csb",
        "cocos/SurfingCat_3_h_level_1_upgrade.csb",
        "cocos/SurfingCat_3_h_level_2.csb",
        "cocos/SurfingCat_3_h_level_2_upgrade.csb",
        "cocos/SurfingCat_3_h_level_3.csb",
        "cocos/SurfingCat_3_h_level_3_upgrade.csb",
        "cocos/SurfingCat_3_v_level_1.csb",
        "cocos/SurfingCat_3_v_level_1_reset.csb",
        "cocos/SurfingCat_3_v_level_1_upgrade.csb",
        "cocos/SurfingCat_3_v_level_2.csb",
        "cocos/SurfingCat_3_v_level_2_upgrade.csb",
        "cocos/SurfingCat_3_v_level_3.csb",
        "cocos/SurfingCat_3_v_level_3_upgrade.csb",
        "cocos/SurfingCat_4_h_level_1.csb",
        "cocos/SurfingCat_4_h_level_1_reset.csb",
        "cocos/SurfingCat_4_h_level_1_upgrade.csb",
        "cocos/SurfingCat_4_h_level_2.csb",
        "cocos/SurfingCat_4_h_level_2_upgrade.csb",
        "cocos/SurfingCat_4_h_level_3.csb",
        "cocos/SurfingCat_4_h_level_3_upgrade.csb",
        "cocos/SurfingCat_4_v_level_1.csb",
        "cocos/SurfingCat_4_v_level_1_reset.csb",
        "cocos/SurfingCat_4_v_level_1_upgrade.csb",
        "cocos/SurfingCat_4_v_level_2.csb",
        "cocos/SurfingCat_4_v_level_2_upgrade.csb",
        "cocos/SurfingCat_4_v_level_3.csb",
        "cocos/SurfingCat_4_v_level_3_upgrade.csb",
        "cocos/SurfingCat_5_h_level_1.csb",
        "cocos/SurfingCat_5_h_level_1_reset.csb",
        "cocos/SurfingCat_5_h_level_1_upgrade.csb",
        "cocos/SurfingCat_5_h_level_2.csb",
        "cocos/SurfingCat_5_h_level_2_upgrade.csb",
        "cocos/SurfingCat_5_h_level_3.csb",
        "cocos/SurfingCat_5_h_level_3_upgrade.csb",
        "cocos/SurfingCat_5_v_level_1.csb",
        "cocos/SurfingCat_5_v_level_1_reset.csb",
        "cocos/SurfingCat_5_v_level_1_upgrade.csb",
        "cocos/SurfingCat_5_v_level_2.csb",
        "cocos/SurfingCat_5_v_level_2_upgrade.csb",
        "cocos/SurfingCat_5_v_level_3.csb",
        "cocos/SurfingCat_5_v_level_3_upgrade.csb",
        "cocos/SurfingCat_6_h_level_1.csb",
        "cocos/SurfingCat_6_h_level_1_reset.csb",
        "cocos/SurfingCat_6_h_level_1_upgrade.csb",
        "cocos/SurfingCat_6_h_level_2.csb",
        "cocos/SurfingCat_6_h_level_2_upgrade.csb",
        "cocos/SurfingCat_6_h_level_3.csb",
        "cocos/SurfingCat_6_h_level_3_upgrade.csb",
        "cocos/SurfingCat_6_v_level_1.csb",
        "cocos/SurfingCat_6_v_level_1_reset.csb",
        "cocos/SurfingCat_6_v_level_1_upgrade.csb",
        "cocos/SurfingCat_6_v_level_2.csb",
        "cocos/SurfingCat_6_v_level_2_upgrade.csb",
        "cocos/SurfingCat_6_v_level_3.csb",
        "cocos/SurfingCat_6_v_level_3_upgrade.csb"
    ],

    "BaseColorCollectorNeedAssets.pack": [
        "flash/colorCollector_hold_profile.plist",
        "flash/colorCollector.plist",
        "cocos/colorCollector_common.plist",

        "cocos/colorCollector_blue_beat_animaltion_beat.csb",
        "cocos/colorCollector_blue_blast_animaltion_blast.csb",
        "cocos/colorCollector_blue_blast_lineshake.csb",
        "cocos/colorCollector_blue_change_animaltion_change.csb",
        "cocos/colorCollector_blue_change_lineshake.csb",
        "cocos/colorCollector_blue_hold_animaltion_hold.csb",
        "cocos/colorCollector_blue_hold_profile_animaltion_hold.csb",
        "cocos/colorCollector_blue_shakeloop_animaltion_shakeloop.csb",
        "cocos/colorCollector_blue_shakeloop_lineshake.csb",

        "cocos/colorCollector_green_beat_animaltion_beat.csb",
        "cocos/colorCollector_green_blast_animaltion_blast.csb",
        "cocos/colorCollector_green_blast_lineshake.csb",
        "cocos/colorCollector_green_change_animaltion_change.csb",
        "cocos/colorCollector_green_change_lineshake.csb",
        "cocos/colorCollector_green_hold_animaltion_hold.csb",
        "cocos/colorCollector_green_hold_profile_animaltion_hold.csb",
        "cocos/colorCollector_green_shakeloop_animaltion_shakeloop.csb",
        "cocos/colorCollector_green_shakeloop_lineshake.csb",

        "cocos/colorCollector_brown_beat_animaltion_beat.csb",
        "cocos/colorCollector_brown_blast_animaltion_blast.csb",
        "cocos/colorCollector_brown_blast_lineshake.csb",
        "cocos/colorCollector_brown_change_animaltion_change.csb",
        "cocos/colorCollector_brown_change_lineshake.csb",
        "cocos/colorCollector_brown_hold_animaltion_hold.csb",
        "cocos/colorCollector_brown_hold_profile_animaltion_hold.csb",
        "cocos/colorCollector_brown_shakeloop_animaltion_shakeloop.csb",
        "cocos/colorCollector_brown_shakeloop_lineshake.csb",

        "cocos/colorCollector_purple_beat_animaltion_beat.csb",
        "cocos/colorCollector_purple_blast_animaltion_blast.csb",
        "cocos/colorCollector_purple_blast_lineshake.csb",
        "cocos/colorCollector_purple_change_animaltion_change.csb",
        "cocos/colorCollector_purple_change_lineshake.csb",
        "cocos/colorCollector_purple_hold_animaltion_hold.csb",
        "cocos/colorCollector_purple_hold_profile_animaltion_hold.csb",
        "cocos/colorCollector_purple_shakeloop_animaltion_shakeloop.csb",
        "cocos/colorCollector_purple_shakeloop_lineshake.csb",

        "cocos/colorCollector_red_beat_animaltion_beat.csb",
        "cocos/colorCollector_red_blast_animaltion_blast.csb",
        "cocos/colorCollector_red_blast_lineshake.csb",
        "cocos/colorCollector_red_change_animaltion_change.csb",
        "cocos/colorCollector_red_change_lineshake.csb",
        "cocos/colorCollector_red_hold_animaltion_hold.csb",
        "cocos/colorCollector_red_hold_profile_animaltion_hold.csb",
        "cocos/colorCollector_red_shakeloop_animaltion_shakeloop.csb",
        "cocos/colorCollector_red_shakeloop_lineshake.csb",

        "cocos/colorCollector_yellow_beat_animaltion_beat.csb",
        "cocos/colorCollector_yellow_blast_animaltion_blast.csb",
        "cocos/colorCollector_yellow_blast_lineshake.csb",
        "cocos/colorCollector_yellow_change_animaltion_change.csb",
        "cocos/colorCollector_yellow_change_lineshake.csb",
        "cocos/colorCollector_yellow_hold_animaltion_hold.csb",
        "cocos/colorCollector_yellow_hold_profile_animaltion_hold.csb",
        "cocos/colorCollector_yellow_shakeloop_animaltion_shakeloop.csb",
        "cocos/colorCollector_yellow_shakeloop_lineshake.csb"
    ],

    "BaseCakeNeedAssets.pack": [
        "cocos/cake_1_cake_1.csb",
        "cocos/cake_2_cake_2.csb",
        "cocos/cake_3_cake_3.csb",
        "cocos/cake_4_cake_4.csb",
        "cocos/cake_5_cake_5.csb",
        "cocos/cake_6_cake_6.csb",
        "cocos/cake_7_cake_7.csb",
        "cocos/cake_8_cake_8.csb",
        "cocos/cake_boom_cake_boom.csb",
        "cocos/cake_boom_star_boom.csb",
        "cocos/cake_boom_star84.csb",
        "cocos/cake_stars_cake_stars.csb",
        "cocos/cake_stars_star_insert_ani.csb",
        "cocos/cake_boom_star_boom.csb",
        "cocos/cake_res.plist"
    ],

    "BaseBlockMachineAssets.pack": [
        "cocos/block_machine.plist",
        "cocos/block_machine_icon_replace.csb",
        "cocos/block_machine_boom_fly.csb",
        "cocos/block_machine_boom_2.csb",
        "cocos/block_machine_boom_1.csb",
        "cocos/block_machine_shot.csb",
        "font/berlinsansfb_40_purpleglow.fnt",

        "cocos/obstacle_anim_waterbomb.plist",
        "cocos/obstacle_anim_waterbomb_boom_1.csb",
        "cocos/obstacle_anim_waterbomb_boomm.csb",
        "cocos/obstacle_anim_waterbomb_guide.csb",
        "cocos/obstacle_anim_waterbomb_huang.csb",
        "cocos/obstacle_anim_waterbomb_pao_dou.csb",
        "cocos/obstacle_anim_waterbomb_pao_zheng.csb",
        "cocos/obstacle_anim_waterbomb_shot.csb"
    ],

    "BaseBowknotAssets.pack": [
        "cocos/obstacle_anim_bowknot_movecut.csb",
        "cocos/obstacle_anim_bowknot_five_tierflower_one.csb",
        "cocos/obstacle_anim_bowknot_checkboard.csb",
        "flash/bowknot_e.plist",
        "cocos/obstacle_anim_bowknot.plist",
        "flash/bomb.plist"
    ],

    "BaseProduceMarkAssets.pack": [
        "cocos/obstacle_anim_produceMark_guide.csb",
        "cocos/obstacle_anim_produceMark_checkboard.csb",
        "cocos/obstacle_anim_produceMark_particle_all.csb",
        "cocos/produce_mark_icon_container.csb",
        "cocos/produce_mark_produce_mark.csb",
        "cocos/obstacle_anim_produceMark.plist",
        "cocos/produce_mark.plist",
        "cocos/block_machine.plist"
    ],

    "PetColorMapHippoNeedAssets.pack": [
        "cocos/pets_hippo_idle_idle.csb",
        "cocos/pets_hippo_idle2_idle2.csb",
        "cocos/pets_hippo_idle_pupil_blink.csb",
        "cocos/pets_hippo_idle2_pupil_blink.csb",

        "cocos/pets_hippo_attack_attack.csb",
        "cocos/pets_hippo_attack_bullet.csb",
        "cocos/pets_hippo_attack_bullet2.csb",
        "cocos/pets_hippo_attack_effect.csb",
        "cocos/pets_hippo_attack_hippo_attack_effect_star.csb",

        "cocos/pets_hippo_beat_beat.csb",
        "cocos/pets_hippo_reaction_reaction.csb",

        "cocos/pets_hippo_charge_charge.csb",
        "cocos/pets_hippo_charge_pupil_blink.csb",

        "cocos/pets_hippo_win_win.csb",
        "cocos/pets_hippo_win_repeat_win_repeat.csb",
        "cocos/pets_hippo_lose_lose.csb"
    ],

    "PetColorMapFrogNeedAssets.pack": [
        "cocos/pets_frog_idle_idle.csb",
        "cocos/pets_frog_idle2_idle2.csb",
        "cocos/pets_frog_idle_frog_eye_blink.csb",

        "cocos/pets_frog_attack_attack.csb",
        "cocos/pets_frog_attack_bullet.csb",
        "cocos/pets_frog_attack_effect.csb",

        "cocos/pets_frog_beat_beat.csb",
        "cocos/pets_frog_reaction_reaction.csb",

        "cocos/pets_frog_charge_charge.csb",
        "cocos/pets_frog_charge_frog_eye_blink.csb",

        "cocos/pets_frog_win_win.csb",
        "cocos/pets_frog_win_repeat_win_repeat.csb",
        "cocos/pets_frog_lose_lose.csb"
    ],

    "PetColorMapBearNeedAssets.pack": [
        "cocos/pets_bear_idle_idle.csb",
        "cocos/pets_bear_idle2_idle2.csb",

        "cocos/pets_bear_attack_attack.csb",
        "cocos/pets_bear_attack_bullet.csb",
        "cocos/pets_bear_attack_effect.csb",
        "cocos/pets_bear_attack_bear_BEAR_attack_chickall.csb",
        "cocos/pets_bear_attack_chick_chcik_feather_group.csb",
        "cocos/pets_bear_attack_chick_chick_feather_moce.csb",

        "cocos/pets_bear_beat_beat.csb",
        "cocos/pets_bear_reaction_reaction.csb",
        "cocos/pets_bear_charge_charge.csb",

        "cocos/pets_bear_win_win.csb",
        "cocos/pets_bear_win_repeat_win_repeat.csb",
        "cocos/pets_bear_lose_lose.csb"
    ],

    "PetColorMapOwlNeedAssets.pack": [
        "cocos/pets_owl_idle_idle.csb",
        "cocos/pets_owl_idle2_idle2.csb",

        "cocos/pets_owl_attack_attack.csb",
        "cocos/pets_owl_attack_owl_owl_hat_in.csb",
        "cocos/pets_owl_attack_owl_owl_hat_our.csb",
        "cocos/pets_owl_attack_owl_effect_dot_move.csb",
        "cocos/pets_owl_attack_effect.csb",
        "cocos/pets_owl_attack_bullet.csb",
        "cocos/pets_owl_attack_owl_effect_dot_move_group.csb",

        "cocos/pets_owl_beat_beat.csb",
        "cocos/pets_owl_reaction_reaction.csb",
        "cocos/pets_owl_charge_charge.csb",

        "cocos/pets_owl_win_win.csb",
        "cocos/pets_owl_win_repeat_win_repeat.csb",
        "cocos/pets_owl_lose_lose.csb"
    ],

    "PetColorMapFoxNeedAssets.pack": [
        "cocos/pets_fox_idle_idle.csb",
        "cocos/pets_fox_idle_fox_fox_head_combine.csb",
        "cocos/pets_fox_idle2_idle2.csb",
        "cocos/pets_fox_idle2_fox_fox_head_combine.csb",

        "cocos/pets_fox_attack_attack.csb",
        "cocos/pets_fox_attack_bullet.csb",
        "cocos/pets_fox_attack_fox_fox_head_combine.csb",
        "cocos/pets_fox_attack_effect.csb",
        "cocos/pets_fox_attack_owl_effect_dot_move_group.csb",

        "cocos/pets_fox_beat_beat.csb",
        "cocos/pets_fox_beat_fox_fox_head_combine.csb",

        "cocos/pets_fox_reaction_reaction.csb",
        "cocos/pets_fox_reaction_fox_fox_head_combine.csb",

        "cocos/pets_fox_charge_charge.csb",
        "cocos/pets_fox_charge_fox_fox_head_combine.csb",

        "cocos/pets_fox_win_win.csb",
        "cocos/pets_fox_win_repeat_win_repeat.csb",
        "cocos/pets_fox_win_fox_fox_head_combine.csb",
        "cocos/pets_fox_win_repeat_fox_fox_head_combine.csb",
        "cocos/pets_fox_lose_lose.csb",
        "cocos/pets_fox_lose_fox_fox_head_combine.csb",

        "flash/bomb.plist"
    ],

    "PetColorMapChickNeedAssets.pack": [
        "cocos/pets_chick_idle_idle.csb",
        "cocos/pets_chick_idle2_idle2.csb",

        "cocos/pets_chick_attack_attack.csb",
        "cocos/pets_chick_attack_bullet.csb",
        "cocos/pets_chick_attack_bullet2.csb",
        "cocos/pets_chick_attack_effect.csb",
        "cocos/pets_chick_attack_effect2.csb",
        "cocos/pets_chick_attack_chick_chcik_feather_group.csb",
        "cocos/pets_chick_attack_chick_chick_feather_moce.csb",

        "cocos/pets_chick_beat_beat.csb",
        "cocos/pets_chick_reaction_reaction.csb",
        "cocos/pets_chick_charge_charge.csb",

        "cocos/pets_chick_win_win.csb",
        "cocos/pets_chick_win_repeat_win_repeat.csb",
        "cocos/pets_chick_lose_lose.csb"
    ],

    "GameItemTypeKVar_Snow.pack": [
        "cocos/frog_finish.plist",

        "cocos/frog_idle_frog_eyeinside_blink02.csb",
        "cocos/frog_finish_mintfolder_bubblegrps.csb",

        "cocos/frog_idle_idle.csb",
        "cocos/frog_start_start.csb",
        "cocos/frog_stay_stay.csb",
        "cocos/frog_score_score.csb",
        "cocos/frog_finish_finish.csb",
        "cocos/frog_lose_lose.csb",

        "cocos/frog_finish_ice.csb",
        "cocos/frog_finish_ice_score.csb",
        "cocos/frog_finish_ice.csb",
        "cocos/frog_finish_frogcup.csb"
    ],

    "GameItemTypeGum.pack": [
        "cocos/racoon_finish_cady_color_IDLE.csb",
        "cocos/racoon_finish_candy_cady_color_OUT.csb",
        "cocos/racoon_finish_cady_color_SCORE.csb",
        "cocos/racoon_finish_cady_color_IN.csb",
        "cocos/racoon_finish_cady_color_FINISH.csb",

        "cocos/racoon_stay_stay.csb",
        "cocos/racoon_idle_idle.csb",
        "cocos/racoon_score_score.csb",
        "cocos/racoon_finish_finish.csb",
        "cocos/racoon_lose_lose.csb",

        "cocos/racoon_finish_candy_candy_in_color.csb",
        "cocos/racoon_finish_candy_candy_in_red.csb",
        "cocos/racoon_finish_candy_candy_in_yellow.csb",
        "cocos/racoon_finish_candy_candy_in_green.csb",
        "cocos/racoon_finish_candy_candy_in_purple.csb",
        "cocos/racoon_finish_candy_candy_in_brown.csb",
        "cocos/racoon_finish_candy_candy_in_blue.csb",
        "cocos/racoon_finish_candy_candy_finish_color.csb",
        "cocos/racoon_finish_candy_candy_finish_red.csb",
        "cocos/racoon_finish_candy_candy_finish_yellow.csb",
        "cocos/racoon_finish_candy_candy_finish_purple.csb",
        "cocos/racoon_finish_candy_candy_finish_green.csb",
        "cocos/racoon_finish_candy_candy_finish_brown.csb",
        "cocos/racoon_finish_candy_candy_finish_blue.csb",
        "cocos/racoon_finish_candy_candy_score_color.csb",
        "cocos/racoon_finish_candy_candy_score_red.csb",
        "cocos/racoon_finish_candy_candy_score_yellow.csb",
        "cocos/racoon_finish_candy_candy_score_green.csb",
        "cocos/racoon_finish_candy_candy_score_purple.csb",
        "cocos/racoon_finish_candy_candy_score_brown.csb",
        "cocos/racoon_finish_candy_candy_score_blue.csb"
    ],

    "HideIsland.pack": [
        "cocos/hide_island_island_animation_lock.csb",
        "cocos/hide_island_island_animation_idle.csb",
        "cocos/hide_island_island_animation_over.csb",
        "cocos/hide_island_island_animation_appear.csb",
        "cocos/hide_island_island_animation_star.csb",
        "cocos/hide_island_level_nodes_3.csb",
        "cocos/hide_island_level_nodes_4.csb",
        "cocos/hide_island_level_node.csb",
        "cocos/hide_island_up_water_ani.csb",
        "cocos/hide_island_water_del.csb",
        "cocos/hide_island_boomopen.csb",
        "cocos/hide_island_up_water.csb",
        "cocos/hide_island_jump_water_ani.csb",
        "cocos/hide_island_water_jump.csb",
        "cocos/hide_level_newer_button_branch.csb",
        "cocos/hide_level_racoon_hi.csb",
        "cocos/hide_level_active_panel.csb",

        "homeConfig/hide_island_fountain1.plist",
        "homeConfig/hide_island_fountain2.plist",
        "cocos/hide_level.plist",
        "cocos/hide_island.plist",
        "font/zzgftongxin.fnt"
    ],

    "MarkPanel.pack": [
        "cocos/mark_panel.plist",
        "adapter/zh_CN/mark_panel_rwfin.plist",
        "cocos/mark_prise_random.plist",

        "cocos/mark_panel_splash.csb",
        "cocos/mark_panel_panel.csb",
        "cocos/mark_panel_res_medal.csb",
        "cocos/mark_panel_res_head.csb",
        "cocos/mark_panel_bottom_btn_green_start.csb",
        "cocos/mark_panel_bottom_btn_blue_start2.csb",
        "cocos/mark_panel_remainDay.csb",
        "cocos/mark_panel_close.csb",
        "cocos/mark_panel_bottom_btn_green_cancel.csb",
        "cocos/mark_panel_bottom_btn_blue_start3.csb",
        "cocos/mark_panel_res_box.csb",
        "cocos/level_panel_pass_bottom_btn_orange_show.csb",

        "cocos/mark_video_confirm_panel.csb",
        "cocos/mark_video_confirm_bottom_btn_orange_start.csb",
        "cocos/mark_video_confirm_bottom_btn_green_start.csb",

        "cocos/mark_prise_random_panel.csb",
        "cocos/mark_prise_random_bottom_btn_green_start.csb",

        "font/zzgftongxin_40.fnt",
        // "font/berlinsansfb_30_bluestroke.fnt",
        "font/zzgftongxin_70_greenstroke.fnt",
        "font/zzgftongxin_40_aquastroke.fnt",
        "font/berlinsansfb_30.fnt",
        "font/berlinsansfb_40_dropshadow.fnt",
        "font/zzgftongxin_40_greenstroke.fnt",
        "font/zzgftongxin_40_brownstroke.fnt"
    ],

    "PropAnimCommon.pack": [
        "cocos/prop_anim.plist",

        "cocos/prop_anim_boomstick_upstar.csb",
        "cocos/prop_anim_prop_anim_10001.csb",
        "cocos/prop_anim_prop_anim_10002.csb",
        "cocos/prop_anim_prop_anim_10003.csb",
        "cocos/prop_anim_prop_anim_10004.csb",
        "cocos/prop_anim_prop_anim_10005.csb",
        "cocos/prop_anim_prop_anim_10006.csb"
    ],

    "FriendPanel.pack": [
        "cocos/friend_panel.plist",
        "cocos/friend_panel2.plist",
        "cocos/friend_panel_fullGiftPanel.csb",
        "cocos/friend_panel_bottom_btn_green_start_confirm.csb",
        // allhome
        "cocos/friend_panel_friendPanel.csb",
        "cocos/friend_panel_tip_rank.csb",
        "cocos/friend_panel_tip_gift.csb",
        "cocos/friend_panel_tip_invite.csb",
        "cocos/friend_panel_tip_add.csb",
        "cocos/friend_panel_bottom_offbottom_light_x.csb",
        "cocos/friend_panel_book_cover.csb",
        "cocos/friend_panel_giftTab.csb",
        "cocos/friend_panel_btn_green_start1_icon_askfor.csb",
        "cocos/friend_panel_btn_green_start1_send.csb",
        "cocos/friend_panel_addFriendTab.csb",
        "cocos/friend_panel_bubbleAnim.csb",
        "cocos/friend_panel_addToggle.csb",
        "cocos/friend_panel_btn_green_start_shareFriend.csb",
        "cocos/friend_panel_bottom_btn_green_start_qrcode.csb",
        "cocos/friend_panel_radar_anime.csb",
        "cocos/friend_panel_btn_green_start_search.csb",
        "cocos/friend_panel_searchResult.csb",
        "cocos/friend_panel_btn_blue_start_shareqr.csb",
        "cocos/permission_show_panel_confirm.csb",
        "cocos/permission_show_bottom_btn_green_start.csb",
        "cocos/permission_show_bottom_offbottom_light_x.csb",

        "cocos/friend_panel_giveGiftPanel.csb",
        "cocos/friend_panel_btn_green_start_give.csb",
        "cocos/friend_panel_bottom_btn_green_start_askfor.csb",
        "cocos/friend_panel_askForGiftPanel.csb",
        "cocos/friend_panel_redEnvelopPanel.csb",
        "cocos/friend_panel_redEnvelopItem.csb",
        "cocos/friend_panel_btn_green_start1_red.csb",
        "cocos/friend_panel_giveGiftItem.csb",
        "cocos/friend_panel_askForGiftItem.csb",
        "cocos/friend_panel_bottom_btn_green_start1_askfor.csb",
        "cocos/friend_panel_redPackAnim.csb",
        "cocos/friend_panel_shiningshinginganime.csb",
        "cocos/friend_panel_friendRewardItem.csb",
        "cocos/friend_panel_btn_green_start_small.csb",

        "font/zzgftongxin_40.fnt",
        // "font/zzgftongxin_40_brownstroke.fnt",
        "font/zzgftongxin_40_aquastroke.fnt",
        "font/zzgftongxin_40_greenstroke.fnt"
    ],
    "refreshPanel.pack": [
        "cocos/refresh_panel.plist",
        "cocos/refresh_panel_boom.csb",
        "cocos/refresh_panel_btn_green_refresh_panel.csb",
        "cocos/refresh_panel_fish_target_bubble.csb",
        "cocos/refresh_panel_panel.csb"
    ]
};
