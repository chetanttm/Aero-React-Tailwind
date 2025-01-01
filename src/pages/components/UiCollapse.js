import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import { useCollapse } from 'react-collapsed';

export default function UiCollapse() {
    const breadcrumbItem = [
        {
            name: "Components",
        },
        {
            name: "Collapse",
        },
    ];

    const { getCollapseProps: getCollapseProps1, getToggleProps: getToggleProps1 } = useCollapse();
    const { getCollapseProps: getCollapseProps3, getToggleProps: getToggleProps3 } = useCollapse();
    const { getCollapseProps: getCollapseProps4, getToggleProps: getToggleProps4 } = useCollapse();
    const { getCollapseProps: getCollapseProps5, getToggleProps: getToggleProps5 } = useCollapse();
    const { getCollapseProps: getCollapseProps6, getToggleProps: getToggleProps6 } = useCollapse();
    const { getCollapseProps: getCollapseProps7, getToggleProps: getToggleProps7 } = useCollapse();
    const { getCollapseProps: getCollapseProps8, getToggleProps: getToggleProps8 } = useCollapse();

    return (
        <>
            <Breadcrumb title="Collapse" breadcrumbItem={breadcrumbItem} />
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>Example</p>
                <button {...getToggleProps1()} className='btn btn-secondary'>Button Collapse 1</button>
                <div {...getCollapseProps1()}>
                    <p className='pt-5'>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15 mb-30'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>Accordion Basic</p>
                <div className='flex flex-col gap-1'>
                    <div>
                        <button {...getToggleProps3()} className='p-10 bg-border-color w-full text-start'>Collapsible Group Item #1</button>
                        <div {...getCollapseProps3()}>
                            <p className='p-20'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </p>
                        </div>
                    </div>
                    <div>
                        <button {...getToggleProps4()} className='p-10 bg-border-color w-full text-start'>Collapsible Group Item #2</button>
                        <div {...getCollapseProps4()}>
                            <p className='p-20'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </p>
                        </div>
                    </div>
                    <div>
                        <button {...getToggleProps5()} className='p-10 bg-border-color w-full text-start'>Collapsible Group Item #3</button>
                        <div {...getCollapseProps5()}>
                            <p className='p-20'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card bg-card-color rounded-md md:p-20 p-15'>
                <p className='text-[16px]/[20px] font-medium md:mb-30 mb-20'>Accordion Colorful</p>
                <div className='flex flex-col gap-1'>
                    <div className='bg-danger-50'>
                        <button {...getToggleProps6()} className='p-10 w-full text-start'>Collapsible Group Item #1</button>
                        <div {...getCollapseProps6()}>
                            <p className='p-20'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </p>
                        </div>
                    </div>
                    <div className='bg-sky-50'>
                        <button {...getToggleProps7()} className='p-10 w-full text-start'>Collapsible Group Item #2</button>
                        <div {...getCollapseProps7()}>
                            <p className='p-20'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </p>
                        </div>
                    </div>
                    <div className='bg-success-50'>
                        <button {...getToggleProps8()} className='p-10 w-full text-start'>Collapsible Group Item #3</button>
                        <div {...getCollapseProps8()}>
                            <p className='p-20'>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
