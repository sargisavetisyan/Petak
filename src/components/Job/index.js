import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavbarPage } from "../NavbarPage";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import StyleJob from './Job.module.scss';
import { ProductDetalis } from "../ProductDetalis";
import { feachJob, feachJobField } from "../../features/job/jobSlice";
import { SimilarStatments } from "../SimilarStatements";
import { InfoCard } from "../InfoCard";
import { ActionsSection } from "../ActionsSection";

export const Job = React.memo(() => {
    const dispatch = useDispatch()
    const { job, jobsFields } = useSelector(state => state.jobData)

    const { id } = useParams()

    useEffect(() => {
        dispatch(feachJob(id))
    }, [id])

    useEffect(() => {
        dispatch(feachJobField(job.field))
    }, [job])

    return (
        <div className={StyleJob.job}>
            <Container>
                <NavbarPage />
                {job &&
                    <div className={StyleJob.body}>
                        <ProductDetalis
                            title='job'
                            product={job}
                        />
                        <div className={StyleJob.similar}>
                            <InfoCard
                                title='job'
                                product={job}
                            />
                            <ActionsSection />
                            <SimilarStatments
                                title='job'
                                products={jobsFields}
                            />
                        </div>
                    </div>
                }
            </Container>
        </div>
    )
})